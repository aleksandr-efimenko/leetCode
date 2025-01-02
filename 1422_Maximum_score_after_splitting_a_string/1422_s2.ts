export function maxScore_1(s: string): number {
  let zeros = 0;
  let ones = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "1") ones++;
    else zeros--;

    maxSum = Math.max(maxSum, zeros - ones);
  }

  if (s[s.length - 1] === '1') 

  return maxSum;
}
