Get key of first value in [entries] that satisfies the test, like [Array.findIndex()].

```javascript
const findKey = require('@extra-entries/find-key');
// findKey(<entries>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <key>, <entries>)
// -> <key of first value>

findKey([3, 1, 4, 1, 5, 9, 2, 6, 5].entries(), (v) => v>6);
// 5
findKey(new Set([1, 6, 1, 6, 2, 2, 9]).entries(), (v, k, ent) => v>5);
// 6
findKey(Object.entries({l: 1.616e-35, m: 2.176e-8}), (v, k, ent) => v===5.391e-44);
// undefined
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.findIndex()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
