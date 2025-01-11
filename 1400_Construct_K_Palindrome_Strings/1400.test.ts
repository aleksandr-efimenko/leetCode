import { assertEquals } from "jsr:@std/assert";
import { canConstruct } from "./1400.ts";

Deno.test("Test case 1: s = 'annabelle', k = 2 should return true", () => {
    const s = "annabelle";
    const k = 2;
    const expected = true;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});

Deno.test("Test case 2: s = 'leetcode', k = 3 should return false", () => {
    const s = "leetcode";
    const k = 3;
    const expected = false;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});

Deno.test("Test case 3: s = 'true', k = 4 should return true", () => {
    const s = "true";
    const k = 4;
    const expected = true;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});

// Additional test cases
Deno.test("Test case 4: s = 'aabbcc', k = 3 should return true", () => {
    const s = "aabbcc";
    const k = 3;
    const expected = true;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});

Deno.test("Test case 5: s = 'aabbcc', k = 4 should return true", () => {
    const s = "aabbcc";
    const k = 4;
    const expected = true;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});

Deno.test("Test case 6: s = 'aabbcc', k = 5 should return true", () => {
    const s = "aabbcc";
    const k = 5;
    const expected = true;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});

Deno.test("Test case 7: s = 'aabbcc', k = 6 should return true", () => {
    const s = "aabbcc";
    const k = 6;
    const expected = true;
    const result = canConstruct(s, k);
    assertEquals(result, expected);
});