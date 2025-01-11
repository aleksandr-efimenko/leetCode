export function canConstruct(s: string, k: number): boolean {
    if (s.length < k) return false


    const freq = Array(26).fill(0)

    Array.from(s).forEach(char => freq[char.charCodeAt(0) - "a".charCodeAt(0)]++)
    const oddCount = freq.reduce((acc, curr) => acc + (curr % 2), 0)

    return oddCount <= k;
}