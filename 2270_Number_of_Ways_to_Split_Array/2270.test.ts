import { assertEquals } from "jsr:@std/assert";
import { waysToSplitArray } from "./2270.ts";

Deno.test("Test case 1: [10, 4, -8, 7] should return 2", () => {
    const expected = 2;
    const result = waysToSplitArray([10, 4, -8, 7]);
    assertEquals(result, expected);
});

Deno.test("Test case 2: [2, 3, 1, 0] should return 2", () => {
    const expected = 2;
    const result = waysToSplitArray([2, 3, 1, 0]);
    assertEquals(result, expected);
});
