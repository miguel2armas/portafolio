import { Formatter } from "../../src/lib/formatter";

describe("Formatter", () => {
  it("formats strings with quotes", () => {
    expect(Formatter("hello")).toBe('"hello"');
  });

  it("formats numbers", () => {
    expect(Formatter(42)).toBe("42");
    expect(Formatter(3.14)).toBe("3.14");
  });

  it("formats booleans", () => {
    expect(Formatter(true)).toBe("true");
    expect(Formatter(false)).toBe("false");
  });

  it("formats null and undefined", () => {
    expect(Formatter(null)).toBe("null");
    expect(Formatter(undefined)).toBe("undefined");
  });

  it("formats bigint", () => {
    expect(Formatter(9007199254740993n)).toBe("9007199254740993n");
  });

  it("formats flat arrays", () => {
    expect(Formatter([1, 2, 3])).toBe("[ 1, 2, 3 ]");
    expect(Formatter(["a", "b"])).toBe('[ "a", "b" ]');
  });

  it("formats plain objects", () => {
    expect(Formatter({ x: 1, y: 2 })).toBe("{\n  x: 1,\n  y: 2\n}");
  });

  it("formats nested structures", () => {
    expect(Formatter({ arr: [1, 2] })).toBe('{\n  arr: [ 1, 2 ]\n}');
  });

  it("formats Map", () => {
    const m = new Map([["key", "val"]]);
    expect(Formatter(m)).toBe('Map (1) {\n  "key" => "val"\n}');
  });

  it("formats Set", () => {
    const s = new Set([1, 2]);
    expect(Formatter(s)).toBe("Set(2) {\n  1,\n  2 \n}");
  });

  it("formats Error", () => {
    const e = new Error("oops");
    expect(Formatter(e)).toBe("Error: Error - oops");
  });

  it("stops recursion at max depth", () => {
    const deep = { a: { b: { c: { d: { e: { f: "leaf" } } } } } };
    const result = Formatter(deep, 3);
    expect(result).toContain("...");
  });
});
