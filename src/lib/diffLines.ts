export type Edit =
  | { type: 'delete'; origLine: number }
  | { type: 'insert'; modLine: number }
  | { type: 'equal' }

export function computeLineDiff(orig: string[], mod: string[]): Edit[] {
  const m = orig.length, n = mod.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = orig[i - 1] === mod[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1])
  const result: Edit[] = []
  let i = m, j = n
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && orig[i - 1] === mod[j - 1]) {
      result.unshift({ type: 'equal' }); i--; j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: 'insert', modLine: j }); j--
    } else {
      result.unshift({ type: 'delete', origLine: i }); i--
    }
  }
  return result
}
