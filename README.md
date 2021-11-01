# nsfp: Node.js single-function [argument] parser

## intro

`nsfp` is an argument parser written in Node.js. It is only one function, and, using some... "cheaty" tactics, achieves a 260 byte size. It allows parsing for GCC-style options (starting with `-`) and Node-style options (long ones starting with `--` and short ones/abbreviations starting with `-`). It also supports options that require values.

## install

Currently, `nsfp` is only available with NPM. To install, use:

```sh
npm install nsfp # short mode: npm i nsfp
```

## contribute

To contribute, feel free to open an issue or PR. Please note that for large PRs that implement multiple featuers at once, it would be appreciated if you linked an issue to it providing a full changelog.
