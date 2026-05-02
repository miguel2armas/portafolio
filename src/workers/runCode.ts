import { injectLogsIntoCode } from "../lib/addLogsToLines";
import { Formatter } from "../lib/formatter";
import type { ConsoleOutput } from "../types/worker";
import * as Babel from "@babel/standalone";

self.onmessage = async (event: MessageEvent) => {
  const { activeTabCode, name, injectLogs } = event.data;
  let output: ConsoleOutput[] = [];
  let outputLimitReached = false;

  const sourceMap = new Map<number, { line: number; column: number }>();
  let currentPosition = 0;

  const originalConsole = {
    log: self.console.log,
    error: self.console.error,
    info: self.console.info,
    warn: self.console.warn,
  };

  const checkOutputLimit = () => {
    if (output.length >= 4000) {
      if (!outputLimitReached) {
        output.push({
          type: "warn",
          content: "Output limit reached (max 4000 entries)",
          line: 0,
          column: 0,
          timestamp: Date.now(),
        });
        outputLimitReached = true;
      }
      self.postMessage(output);
      return true;
    }
    return false;
  };

  const makeHandler = (type: ConsoleOutput["type"]) =>
    (...args: unknown[]) => {
      if (!checkOutputLimit()) {
        const position = sourceMap.get(currentPosition++);
        output.push({
          type,
          content: args.map((arg) => Formatter(arg)).join(" "),
          line: position?.line ?? 0,
          column: position?.column ?? 0,
          timestamp: Date.now(),
        });
      }
    };

  try {
    activeTabCode.split("\n").forEach((line: string, index: number) => {
      if (line.includes("console.")) {
        sourceMap.set(currentPosition++, { line: index + 1, column: 0 });
      }
    });
    currentPosition = 0;

    (self.console as any).clear = () => { output = []; };
    self.console.log   = makeHandler("log");
    self.console.error = makeHandler("error");
    self.console.info  = makeHandler("info");
    self.console.warn  = makeHandler("warn");

    const transpiledCode = (Babel as any).transform(activeTabCode, {
      presets: ["typescript"],
      filename: name,
      sourceType: "module",
    }).code;

    const code = injectLogs ? injectLogsIntoCode(transpiledCode ?? "") : transpiledCode;

    if (!outputLimitReached) {
      new Function(code ?? "")();
    }
  } catch (error) {
    if (!outputLimitReached) {
      output.push({
        type: "error",
        content: `Runtime Error: ${error ?? "Unknown error"}`,
        line: 0,
        column: 0,
        timestamp: Date.now(),
      });
    }
  } finally {
    self.console.log   = originalConsole.log;
    self.console.error = originalConsole.error;
    self.console.info  = originalConsole.info;
    self.console.warn  = originalConsole.warn;

    if (!outputLimitReached) {
      self.postMessage(output);
    }
  }
};
