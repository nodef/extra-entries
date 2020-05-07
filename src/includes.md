Check if value is included in [entries], like [Array.includes()].

```javascript
const includes = require('@extra-entries/includes');
// includes(<entries>, <search value>, [begin=0], [end])
// -> true | false

includes(['robocop', 'small wonder'].entries(), 'small wonder');
// true
includes(new Set(['the terminator', 'i, robot']).entries(), 'robocop');
// false
includes(Object.entries({'wall-e': 2008, transformers: 2007}), 'the matrix');
// false
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.includes()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
