import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { bytesToHex, bytesToString, hexToBytes, stringToBytes } from "./mod.ts";

Deno.test("round trip hex value", () => {
  const s = "hello world";
  const h = bytesToHex(stringToBytes(s));
  assertEquals(h, "68656c6c6f20776f726c64", "hex value");
  assertEquals(bytesToString(hexToBytes(h)), s, "round trip");
});
