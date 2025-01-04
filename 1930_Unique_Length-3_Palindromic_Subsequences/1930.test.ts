import { assertEquals } from "jsr:@std/assert";
import { countPalindromicSubsequence } from "./1930.ts";

Deno.test("Test case 1: 'aabca' should return 3", () => {
    const expected = 3;
    const result = countPalindromicSubsequence("aabca");
    assertEquals(result, expected);
});

Deno.test("Test case 2: 'adc' should return 0", () => {
    const expected = 0;
    const result = countPalindromicSubsequence("adc");
    assertEquals(result, expected);
});

Deno.test("Test case 3: 'bbcbaba' should return 4", () => {
    const expected = 4;
    const result = countPalindromicSubsequence("bbcbaba");
    assertEquals(result, expected);
});