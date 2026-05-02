import { injectLogsIntoCode } from "../../src/lib/addLogsToLines";

describe("injectLogsIntoCode", () => {
  it("injects console.log after a top-level expression", () => {
    const code = `greet("World")`;
    const result = injectLogsIntoCode(code);
    expect(result).toContain(`console.log(greet("World"))`);
  });

  it("does not inject for console.log calls", () => {
    const code = `console.log("hello")`;
    const result = injectLogsIntoCode(code);
    const occurrences = (result.match(/console\.log/g) ?? []).length;
    expect(occurrences).toBe(1);
  });

  it("does not inject for console.warn calls", () => {
    const code = `console.warn("msg")`;
    const result = injectLogsIntoCode(code);
    expect(result).not.toContain("console.log");
  });

  it("does not inject for console.error calls", () => {
    const code = `console.error("err")`;
    const result = injectLogsIntoCode(code);
    expect(result).not.toContain("console.log");
  });

  it("does not inject for assignment expressions", () => {
    const code = `let x = 0\nx = 5`;
    const result = injectLogsIntoCode(code);
    expect(result).not.toContain("console.log(x = 5)");
  });

  it("does not inject for update expressions", () => {
    const code = `let i = 0\ni++`;
    const result = injectLogsIntoCode(code);
    expect(result).not.toContain("console.log(i++)");
  });

  it("injects logs for multiple independent expressions", () => {
    const code = `foo()\nbar()`;
    const result = injectLogsIntoCode(code);
    expect(result).toContain("console.log(foo())");
    expect(result).toContain("console.log(bar())");
  });

  it("returns original code when parsing fails", () => {
    const bad = `const = broken syntax !!!`;
    const result = injectLogsIntoCode(bad);
    expect(result).toBe(bad);
  });
});
