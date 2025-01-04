export function countPalindromicSubsequence(s: string): number {
    const letters = new Set(s)
    let result = 0;
    for (const letter of letters) {
        const i = s.indexOf(letter)
        const j = s.lastIndexOf(letter)
        console.log(i)
        console.log(j)
        const between = new Set()
        for (let k = i + 1;  k < j; k++) {
            console.log('add')
            between.add(s[k])
        }
        console.log(between)
        result += [...between].length
    }
    return result;
};

console.log(countPalindromicSubsequence("aabca"))

