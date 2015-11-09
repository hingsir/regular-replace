# regular-replace[![npm version](https://badge.fury.io/js/regular-replace.svg)](https://badge.fury.io/js/regular-replace)

> 常用的正则替换，如千分位，银行卡号，手机号码，适用于浏览器和node.js环境

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install regular-replace --save
```

## Usage

```js
var replace = require('regular-replace');

replace.thousands('12345678.9999');
//=> 12,345,678.999,9

replace.bankCard('6222021********1245');
//=> 6222 021* **** ***1 245

replace.mobilePhone('13812345678','-');
//=> 138-1234-5678
```
## License

Copyright © 2015 hingsir
Released under the MIT license.

