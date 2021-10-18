# nsfp: Node.js single-function [argument] parser

## intro

`nsfp` is an argument parser written in Node.js. It is only one function, leading to its incredible 202B size. (Yes, you read that right, 202 bytes.) It allows parsing for GCC-style options (starting with `-`) and Node-style options (long ones starting with `--` and short ones/abbreviations starting with `-`). It also allows you to implement custom commands. In its present state, it does not support options that require variables.

## install

Currently, `nsfp` is only available with NPM. To install, use:

```sh
npm install nsfp # short mode: npm i nsfp
```

## usage

The `nsfp` module returns a function that takes two arguments: the `array` (of type [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)) and the `registry` (of type [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)).

- The `array` is the array of arguments (excluding the `node <programfile>`). Normally, this is used with `process.argv.slice(2)`.
- The `registry` is the registry for short objects to long objects (i.e., to have `-h` as an alias for `--help`, you would use `{"h": "help"}`). This can be ignored for GCC-style options where they always start with `-`.

## contribute

To contribute, feel free to open an issue or PR. Please note that for large PRs that implement multiple featuers at once, it would be appreciated if you linked an issue to it providing a full changelog.
