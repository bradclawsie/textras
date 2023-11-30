# textras

Text wrangling Typescript utilities

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![ci](https://github.com/bradclawsie/textras/workflows/ci/badge.svg)

## import

```ts
import * as textras from "https://deno.land/x/textras/mod.ts";
```

## exported fuctions

```
const bytesToHex: (d: Uint8Array) => string
  convert a byte array to its hex string encoding

const bytesToString: (d: Uint8Array) => string
  convert a byte array to its string representation

const hexToBytes: (s: string) => Uint8Array
  convert a hex string to its byte array representation

const stringToBytes: (s: string) => Uint8Array
  convert a string to its byte array representation
```

## example

```ts
import { assertEquals } from "https://deno.land/std@0.208.0/testing/asserts.ts";
import {
  bytesToHex,
  bytesToString,
  hexToBytes,
  stringToBytes,
} from "https://deno.land/x/textras/mod.ts";

// round trip a string to hex and back again
const s = "hello world";
const h = bytesToHex(stringToBytes(s));
assertEquals(h, "68656c6c6f20776f726c64", "hex value");
assertEquals(bytesToString(hexToBytes(h)), s, "round trip");
```
