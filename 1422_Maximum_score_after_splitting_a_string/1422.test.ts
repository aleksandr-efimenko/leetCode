import { assertEquals } from "jsr:@std/assert";
import { maxScore_1 } from "./1422_s1.ts";

Deno.test("00111 should return 5", () => {
  const expected = 5;
  const result = maxScore_1("00111");
  assertEquals(result, expected);
});

Deno.test("011101 should return 5", () => {
  const expected = 5;
  const result = maxScore_1("011101");
  assertEquals(result, expected);
});

Deno.test("1111 should return 3", () => {
  const expected = 3;
  const result = maxScore_1("1111");
  assertEquals(result, expected);
});

Deno.test("00 should return 1", () => {
  const expected = 1;
  const result = maxScore_1("00");
  assertEquals(result, expected);
});
