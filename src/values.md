Get values from [entries], like [Object.values()].

```javascript
const values = require('@extra-entries/values');
// values(<entries>)

values(['bitcoin', 'litecoin', 'monero'].entries());
// ['bitcoin', 'litecoin', 'monero']
values(new Set(['sha-256', 'scrypt', 'cryptonight']).entries());
// ['sha-256', 'scrypt', 'cryptonight']
values(Object.entries({btc: 18803, ltc: 345, xmr: 381}));
// [18803, 345, 381]
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Object.values()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
