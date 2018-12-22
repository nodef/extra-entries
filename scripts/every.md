Check if all values in [entries] satisfy the test, like [Array.every()].

```javascript
const every = require('@extra-entries/every');
// every(<entries>, <test function>, [this], [begin=0], [end])
// - <test function>(<value>, <key>, <entries>)
// -> true | false

every(['potter', 'bolt', 'paddington'].entries(), (v) => v.length>3);
// true
every(new Set(['peake', 'malala', 'attenborough']).entries(), (v, k, ent) => v.length+k.length<20);
// false
every(Object.entries({mobot: 2017, serena: 2017}), (v, k, ent) => v===2017 && k.length>2);
// true
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.every()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
