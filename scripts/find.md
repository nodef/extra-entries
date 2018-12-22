Get first value in [entries] that satisfies the test, like [Array.find()].

```javascript
const find = require('@extra-entries/find');
// find(<entries>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <key>, <entries>)
// -> <first value>

find([5, 3, 9, 1, 1, 6].entries(), (v) => v>5);
// 9
find(new Set(['length', 'mass', 'time']).entries(), (v, k, ent) => k.includes('i'));
// 'time'
find(Object.entries({t: 20, i: 9, m: 13, e: 5}), (v, k, ent) => v<10);
// 9
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.find()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
