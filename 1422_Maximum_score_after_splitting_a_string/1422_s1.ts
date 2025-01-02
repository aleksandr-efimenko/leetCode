export function maxScore_1(s: string): number {
    let leftZeros = 0;
    let rightOnes = Array.from(s).reduce(
        (acc, curr) => curr === "1" ? acc + 1 : acc,
        0,
    );
    let maxSum = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "1") {
            rightOnes--;
        } else {
            leftZeros++;
        }
        maxSum = Math.max(maxSum, leftZeros + rightOnes);
    }
    return maxSum;
}
