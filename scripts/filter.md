Filter values in [entries] that pass the test, like [Array.filter()].

```javascript
const filter = require('@extra-entries/filter');
// filter(<entries>, <test function>, [this], [begin=0], [end], [target=[]], [at])
// - <test function>(<value>, <key>, <entries>)
// -> <target>

filter([1, 9, 9, 9].entries(), (v) => v>4);
// [[1, 9], [2, 9], [3, 9]]
filter(new Set('matrix').entries(), (v, k, ent) => v>'l');
// [['m', 'm'], ['t', 't'], ['r', 'r'], ['x', 'x']]
filter(Object.entries({r: 18, e: 5, l: 12, o: 15}), (v, k, ent) => v<10);
// [['e', 5]]
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.filter()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
