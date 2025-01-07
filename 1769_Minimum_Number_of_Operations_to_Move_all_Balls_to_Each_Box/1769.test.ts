import { assertEquals } from "jsr:@std/assert";
import { minOperations } from "./1769.ts";

Deno.test("Test case 1: boxes = '110' should return [1,1,3]", () => {
    const boxes = "110";
    const expected = [1, 1, 3];
    const result = minOperations(boxes);
    assertEquals(result, expected);
});

Deno.test("Test case 2: boxes = '001011' should return [11,8,5,4,3,4]", () => {
    const boxes = "001011";
    const expected = [11, 8, 5, 4, 3, 4];
    const result = minOperations(boxes);
    assertEquals(result, expected);
});

// Additional test cases
Deno.test("Test case 3: boxes = '000' should return [0,0,0]", () => {
    const boxes = "000";
    const expected = [0, 0, 0];
    const result = minOperations(boxes);
    assertEquals(result, expected);
});

Deno.test("Test case 4: boxes = '111' should return [3,2,3]", () => {
    const boxes = "111";
    const expected = [3, 2, 3];
    const result = minOperations(boxes);
    assertEquals(result, expected);
});