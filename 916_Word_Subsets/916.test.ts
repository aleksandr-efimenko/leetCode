import { assertEquals } from "jsr:@std/assert";
import { wordSubsets } from "./916.ts";

Deno.test("Test case 1: words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['e','o'] should return ['facebook','google','leetcode']", () => {
    const words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    const words2 = ["e", "o"];
    const expected = ["facebook", "google", "leetcode"];
    const result = wordSubsets(words1, words2);
    assertEquals(result.sort(), expected.sort());
});

Deno.test("Test case 2: words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['lc','eo'] should return ['leetcode']", () => {
    const words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    const words2 = ["lc", "eo"];
    const expected = ["leetcode"];
    const result = wordSubsets(words1, words2);
    assertEquals(result.sort(), expected.sort());
});

Deno.test("Test case 3: words1 = ['acaac','cccbb','aacbb','caacc','bcbbb'], words2 = ['c','cc','b'] should return ['cccbb']", () => {
    const words1 = ["acaac", "cccbb", "aacbb", "caacc", "bcbbb"];
    const words2 = ["c", "cc", "b"];
    const expected = ["cccbb"];
    const result = wordSubsets(words1, words2);
    assertEquals(result.sort(), expected.sort());
});

// Additional test cases
Deno.test("Test case 4: words1 = ['a','b','c'], words2 = ['a'] should return ['a']", () => {
    const words1 = ["a", "b", "c"];
    const words2 = ["a"];
    const expected = ["a"];
    const result = wordSubsets(words1, words2);
    assertEquals(result.sort(), expected.sort());
});

Deno.test("Test case 5: words1 = ['a','b','c'], words2 = ['d'] should return []", () => {
    const words1 = ["a", "b", "c"];
    const words2 = ["d"];
    const expected = [] as string[];
    const result = wordSubsets(words1, words2);
    assertEquals(result.sort(), expected.sort());
});