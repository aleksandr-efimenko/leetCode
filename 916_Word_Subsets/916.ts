export function wordSubsets(words1: string[], words2: string[]): string[] {
    const result = [];
    const maxFreq = new Map<string, number>();

    // Calculate the maximum frequency of each character required by words2
    for (const word of words2) {
        const freq = new Map<string, number>();
        for (const char of word) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        for (const [char, count] of freq.entries()) {
            maxFreq.set(char, Math.max(maxFreq.get(char) || 0, count));
        }
    }

    // Check each word in words1
    for (const word of words1) {
        const freq = new Map<string, number>();
        for (const char of word) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        let isUniversal = true;
        for (const [char, count] of maxFreq.entries()) {
            if ((freq.get(char) || 0) < count) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) {
            result.push(word);
        }
    }

    return result;
}

const words1 =  ["amazon","apple","facebook","google","leetcode"]
const words2 = ["e", "o"]

console.log(wordSubsets(words1, words2))
