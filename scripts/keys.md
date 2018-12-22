Get keys from [entries], like [Object.keys()].

```javascript
const keys = require('@extra-entries/keys');
// keys(<entries>)

keys(['fixed deposit', 'insurance', 'mutual fund', 'sip'].entries());
// [0, 1, 2, 3]
keys(new Set(['savings', 'current', 'demat']).entries());
// ['savings', 'current', 'demat']
keys(Object.entries({govt: 'SBI', pvt: 'HDFC'}));
// ['govt', 'pvt']
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Object.keys()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
