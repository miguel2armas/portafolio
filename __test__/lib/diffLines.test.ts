import { computeLineDiff } from "../../src/lib/diffLines";

describe("computeLineDiff", () => {
  it("returns empty for two empty arrays", () => {
    expect(computeLineDiff([], [])).toEqual([]);
  });

  it("marks all lines equal when inputs are identical", () => {
    const lines = ["a", "b", "c"];
    const result = computeLineDiff(lines, lines);
    expect(result.every((e) => e.type === "equal")).toBe(true);
    expect(result).toHaveLength(3);
  });

  it("marks all original lines as deleted when modified is empty", () => {
    const result = computeLineDiff(["a", "b"], []);
    expect(result).toEqual([
      { type: "delete", origLine: 1 },
      { type: "delete", origLine: 2 },
    ]);
  });

  it("marks all modified lines as inserted when original is empty", () => {
    const result = computeLineDiff([], ["x", "y"]);
    expect(result).toEqual([
      { type: "insert", modLine: 1 },
      { type: "insert", modLine: 2 },
    ]);
  });

  it("detects a single line change", () => {
    const orig = ["a", "b", "c"];
    const mod  = ["a", "X", "c"];
    const result = computeLineDiff(orig, mod);
    const deletes = result.filter((e) => e.type === "delete");
    const inserts = result.filter((e) => e.type === "insert");
    expect(deletes).toHaveLength(1);
    expect(inserts).toHaveLength(1);
  });

  it("detects an added line", () => {
    const orig = ["a", "c"];
    const mod  = ["a", "b", "c"];
    const result = computeLineDiff(orig, mod);
    const inserts = result.filter((e) => e.type === "insert");
    expect(inserts).toHaveLength(1);
    expect(inserts[0]).toEqual({ type: "insert", modLine: 2 });
  });

  it("detects a removed line", () => {
    const orig = ["a", "b", "c"];
    const mod  = ["a", "c"];
    const result = computeLineDiff(orig, mod);
    const deletes = result.filter((e) => e.type === "delete");
    expect(deletes).toHaveLength(1);
    expect(deletes[0]).toEqual({ type: "delete", origLine: 2 });
  });
});
