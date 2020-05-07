Get all values in [entries] that satisfy the test, like [Array.find()].

```javascript
const findAll = require('@extra-entries/find-all');
// findAll(<entries>, <test function>, [this], [begin=0], [end], [target=[]], [at])
// - <test function>(<value>, <key>, <entries>)
// -> <target>

findAll([5, 3, 9, 1, 1, 6].entries(), (v) => v>5);
// [9, 6]
findAll(new Set(['length', 'mass', 'time']).entries(), (v, k, ent) => k.includes('i'));
// ['time']
findAll(Object.entries({t: 20, i: 9, m: 13, e: 5}), (v, k, ent) => v<10);
// [9, 5]
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
