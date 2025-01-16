export function xorAllNums(nums1: number[], nums2: number[]): number {
    const map = new Map();
    nums1.forEach(num => map.set(num, (map.get(num) ?? 0) + nums2.length))
    nums2.forEach(num => map.set(num, (map.get(num) ?? 0) + nums1.length))
    console.log(map)

    let result = 0
    for (const [number, frequency] of map) {
        if (frequency % 2) {
            result ^= number
        }
    }

    return result
}

const nums1 = [2, 1, 3]
const nums2 = [10, 2, 5, 0]
console.log(xorAllNums(nums1, nums2))