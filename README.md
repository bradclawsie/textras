# textras
Text wrangling Typescript utilities 

```
const bytesToHex: (d: Uint8Array) => string
  convert a byte array to its hex string encoding

  @param {Uint8Array} d
      - the input byte array

  @return {string}
      the hex string encoding of d


const bytesToString: (d: Uint8Array) => string
  convert a byte array to its string representation

  @param {Uint8Array} d
      - the input byte array

  @return {string}
      the string representation of s


const hexToBytes: (s: string) => Uint8Array
  convert a hex string to its byte array representation

  @param {string} s
      - the input hex string

  @return {Uint8Array}
      the hex-decoded byte array representation of s


const stringToBytes: (s: string) => Uint8Array
  convert a string to its byte array representation

  @param {string} s
      - the input string

  @return {Uint8Array}
      the byte array representation of s

```
