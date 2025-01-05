import { assertEquals } from "jsr:@std/assert";
import { shiftingLetters } from "./2381.ts";

Deno.test("Test case 1: s = 'abc', shifts = [[0,1,0],[1,2,1],[0,2,1]] should return 'ace'", () => {
    const s = "abc";
    const shifts = [[0, 1, 0], [1, 2, 1], [0, 2, 1]];
    const expected = "ace";
    const result = shiftingLetters(s, shifts);
    assertEquals(result, expected);
});

Deno.test("Test case 2: s = 'dztz', shifts = [[0,0,0],[1,1,1]] should return 'catz'", () => {
    const s = "dztz";
    const shifts = [[0, 0, 0], [1, 1, 1]];
    const expected = "catz";
    const result = shiftingLetters(s, shifts);
    assertEquals(result, expected);
});

// Additional test cases
Deno.test("Test case 3: s = 'a', shifts = [[0,0,1]] should return 'b'", () => {
    const s = "a";
    const shifts = [[0, 0, 1]];
    const expected = "b";
    const result = shiftingLetters(s, shifts);
    assertEquals(result, expected);
});

Deno.test("Test case 4: s = 'xyz', shifts = [[0,2,1]] should return 'yza'", () => {
    const s = "xyz";
    const shifts = [[0, 2, 1]];
    const expected = "yza";
    const result = shiftingLetters(s, shifts);
    assertEquals(result, expected);
});

Deno.test("Test case 5: s = 'abc', shifts = [[0,2,0]] should return 'zab'", () => {
    const s = "abc";
    const shifts = [[0, 2, 0]];
    const expected = "zab";
    const result = shiftingLetters(s, shifts);
    assertEquals(result, expected);
});