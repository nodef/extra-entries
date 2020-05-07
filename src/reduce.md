Reduce [entries] to single value with accumulator and values, like [Array.reduce()].

```javascript
const reduce = require('@extra-entries/reduce');
// reduce(<entries>, <reduce function>, [initial value], [begin=0], [end])
// - <reduce function>(<accumulator>, <value>, <key>, <entries>)
// -> <accumulator>

reduce([22, 338, 618].entries(), (acc, v) => acc+v);
// 978
reduce(new Set([74, 207, 281]).entries(), (acc, v, k, ent) => acc+v+k, 0);
// 1124
reduce(new Map().set('GIMPS', 'prime').entries(), (acc, v, k, ent) => acc+v+k, '!');
// '!primeGIMPS'
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.reduce()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
