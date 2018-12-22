Get keys of all values in [entries] that satisfy the test, like [Array.findIndex()].

```javascript
const findAllKeys = require('@extra-entries/find-all-keys');
// findAllKeys(<entries>, <test function>, [this], [begin=0], [end], [target=[]], [at])
// - <test function>(<value>, <key>, <entries>)
// -> <target>

findAllKeys([3, 1, 4, 1, 5, 9, 2, 6, 5].entries(), (v) => v>6);
// [5]
findAllKeys(new Set([1, 6, 1, 6, 2, 2, 9]).entries(), (v, k, ent) => v>5);
// [6, 9]
findAllKeys(Object.entries({l: 1.616e-35, m: 2.176e-8}), (v, k, ent) => v===5.391e-44);
// []
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.findIndex()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
