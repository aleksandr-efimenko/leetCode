import { assertEquals } from "jsr:@std/assert";
import { vowelStrings } from "./2559.ts";

Deno.test("Test case 1", () => {
    const words = ["aba", "bcb", "ece", "aa", "e"];
    const queries = [[0, 2], [1, 4], [1, 1]];
    const expected = [2, 3, 0];
    const result = vowelStrings(words, queries);
    assertEquals(result, expected);
});

Deno.test("Test case 2", () => {
    const words = ["a", "e", "i", "o", "u"];
    const queries = [[0, 4], [1, 3], [2, 2]];
    const expected = [5, 3, 1];
    const result = vowelStrings(words, queries);
    assertEquals(result, expected);
});

Deno.test("Test case 3", () => {
    const words = ["apple", "banana", "cherry", "date"];
    const queries = [[0, 1], [1, 2], [2, 3]];
    const expected = [1, 0, 0];
    const result = vowelStrings(words, queries);
    assertEquals(result, expected);
});

Deno.test("Test case 4", () => {
    const words = ["a", "b", "c", "d", "e"];
    const queries = [[0, 4], [0, 0], [4, 4]];
    const expected = [2, 1, 1];
    const result = vowelStrings(words, queries);
    assertEquals(result, expected);
});