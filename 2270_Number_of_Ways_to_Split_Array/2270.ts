export function waysToSplitArray(nums: number[]): number {
    const precomputed = Array(nums.length)
    precomputed[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        precomputed[i] = precomputed[i - 1] + nums[i]
    }
    const arraySum = precomputed[precomputed.length - 1]

    let count = 0;
    for (let i = 0; i < precomputed.length - 1; i++) {
        if (precomputed[i] >= arraySum - precomputed[i]) {
            count++
        }
    }
    return count;
};
