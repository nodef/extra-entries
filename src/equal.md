Check if two [entries] are equal.

```javascript
const equal = require('@extra-entries/equal');
// equal(<entries1>, <entries2>)
// -> true | false

equal([1858, 1947].entries(), [1947, 1858].entries());
// false
equal(new Set([1757, 1858]).entries(), new Set([1858, 1757]).entries());
// true
equal(Object.entries({i: 9, s: 19}), Object.entries({s: 19, i: 9}));
// true
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
