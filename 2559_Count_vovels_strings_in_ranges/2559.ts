export function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const precomputed = [0];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const lastItem = precomputed[i];
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
      precomputed.push(lastItem + 1);
    } else {
      precomputed.push(lastItem);
    }
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const queryFirstIndex = queries[i][0];
    const queryLastIndex = queries[i][1];
    const resultValue = precomputed[queryLastIndex + 1] -
      precomputed[queryFirstIndex];
    result.push(resultValue);
  }

  return result;
}
