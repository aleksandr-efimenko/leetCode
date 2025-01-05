function shiftingLetters(s: string, shifts: number[][]): string {
    const result = Array.from(s);
    const totalShift = Array(s.length).fill(0)
    console.log(totalShift)
    for (let shift of shifts) {
        for (let i = shift[0]; i <= shift[1]; i++) {
            totalShift[i] += shift[2] === 1 ? 1 : -1
        }
    }
    console.log(totalShift)
    for (let i = 0; i < totalShift.length ; i++) {
        result[i] = shiftLetter(s[i], totalShift[i])
    }
    return result.join("")
};
const lettersMap = new Map()
const letters = 'abcdefghijklmnopqrstuvwxyz'
Array.from(letters).forEach((value, index) => lettersMap.set(value, index))

function shiftLetter(letter: string, count: number) {
    let letterIndex = lettersMap.get(letter) + count

    if (letterIndex < 0) {
        letterIndex = letterIndex % letters.length + letters.length
    }

    if (letterIndex >= letters.length) {
        letterIndex = letterIndex % letters.length
    }

    return letters[letterIndex];
}

console.log(shiftLetter("a", 26))

const s = "abc"
const shifts = [[0, 1, 0], [1, 2, 1], [0, 2, 1]]
console.log(shiftingLetters(s, shifts))