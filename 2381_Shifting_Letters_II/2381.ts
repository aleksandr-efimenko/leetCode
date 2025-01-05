
export function shiftingLetters(s: string, shifts: number[][]): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const result = Array.from(s);
    const diffArray = Array(s.length).fill(0)

    for (const shift of shifts) {
        // forward direction
        const startIndex = shift[0]
        const endIndex = shift[1]
        if (shift[2] === 1) {
            // increment at the start index
            diffArray[startIndex] += 1;
            if (endIndex + 1 < s.length) {
                diffArray[endIndex + 1] -= 1;
            }
        } else {
            diffArray[startIndex] -= 1;
            if (endIndex + 1 < s.length) {
                diffArray[endIndex + 1] += 1;
            }
        }
    }

    let numberOfShifts = 0
    for (let i = 0; i < diffArray.length; i++) {
        numberOfShifts = (numberOfShifts + diffArray[i]) % 26
        if (numberOfShifts < 0) numberOfShifts += 26

        result[i] = letters[(letters.indexOf(s[i]) + numberOfShifts) % 26]
    }
    return result.join("")
};
