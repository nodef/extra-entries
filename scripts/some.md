Check if atleast one value in [entries] passes the test, like [Array.some()].

```javascript
const some = require('@extra-entries/some');
// some(<entries>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <key>, <entries>)
// -> true | false

some(['LT', 'RT', 'FD', 'BK'].entries(), (v, i) => v.length===i);
// true
some(new Set(['Logo', 'GWBASIC', 'QuickBASIC', 'Java']).entries(), (v, k, ent) => v.includes('BAS'));
// true
some(Object.entries({f1: 'help', f2: 'run', f10: 'restart'}), (v, k, ent) => k==='f'+ent.length);
// false
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.some()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
