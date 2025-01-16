import { assertEquals } from "jsr:@std/assert";
import { xorAllNums } from "./2425.ts";

Deno.test("Test case 1: nums1 = [2,1,3], nums2 = [10,2,5,0] should return 13", () => {
    const nums1 = [2, 1, 3];
    const nums2 = [10, 2, 5, 0];
    const expected = 13;
    const result = xorAllNums(nums1, nums2);
    assertEquals(result, expected);
});

Deno.test("Test case 2: nums1 = [1,2], nums2 = [3,4] should return 0", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const expected = 0;
    const result = xorAllNums(nums1, nums2);
    assertEquals(result, expected);
});

// Additional test cases
Deno.test("Test case 3: nums1 = [0], nums2 = [0] should return 0", () => {
    const nums1 = [0];
    const nums2 = [0];
    const expected = 0;
    const result = xorAllNums(nums1, nums2);
    assertEquals(result, expected);
});

Deno.test("Test case 4: nums1 = [1], nums2 = [1] should return 0", () => {
    const nums1 = [1];
    const nums2 = [1];
    const expected = 0;
    const result = xorAllNums(nums1, nums2);
    assertEquals(result, expected);
});