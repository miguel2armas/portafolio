import { type ExpressionStatement, type Node, parse } from "acorn";
import { ancestor, simple } from "acorn-walk";

export function injectLogsIntoCode(code: string): string {
  const lines = code.split("\n");

  try {
    const ast = parse(code, {
      ecmaVersion: "latest",
      sourceType: "module",
      locations: true,
      ranges: true,
      onComment: () => {},
    });

    const insertPoints: { line: number; expr: string }[] = [];

    ancestor(ast, {
      ExpressionStatement(node, ancestors) {
        if (!node.loc) return;

        const excludedTypes = ["UpdateExpression", "AssignmentExpression"];
        if (excludedTypes.includes(node.expression.type)) return;

        const isInsideExcludedContext =
          Array.isArray(ancestors) &&
          ancestors.some((anc) =>
            anc.type === "BlockStatement" ||
            anc.type === "ArrayExpression" ||
            anc.type === "ObjectExpression"
          );
        if (isInsideExcludedContext) return;
        if (containsAssignmentOrUpdate(node.expression)) return;
        if (containsConsoleLog(node.expression)) return;

        const lineNum = node.loc.end.line;
        if (lines[lineNum - 1]?.includes("console.")) return;

        const mainPart = extractMainExpression(code, node);
        if (!mainPart) return;

        insertPoints.push({ line: lineNum - 1, expr: mainPart });
      },
    });

    insertPoints.sort((a, b) => b.line - a.line);
    for (const p of insertPoints) {
      lines.splice(p.line + 1, 0, `console.log(${p.expr});`);
    }

    return lines.join("\n").trim();
  } catch {
    return code;
  }
}

function extractMainExpression(code: string, node: ExpressionStatement): string {
  const expression = code.slice(node.start, node.end).trim();
  const withoutComments = expression.split("//")[0].trim();
  return withoutComments.replace(/;$/, "");
}

function containsAssignmentOrUpdate(expression: Node): boolean {
  let found = false;
  simple(expression, {
    AssignmentExpression() { found = true; },
    UpdateExpression() { found = true; },
  });
  return found;
}

function containsConsoleLog(expression: Node): boolean {
  let found = false;
  simple(expression, {
    CallExpression(node) {
      if (
        node.callee.type === "MemberExpression" &&
        node.callee.object.type === "Identifier" &&
        (node.callee.object as any).name === "console"
      ) {
        found = true;
      }
    },
  });
  return found;
}
