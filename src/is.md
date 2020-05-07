Check if value is [entries].

```javascript
const is = require('@extra-entries/is');
// is(<value>)
// -> true | false

is(['bright', 'lighted'].entries());
// true
is(Object.entries({d: 4, i: 9, m: 13}));
// true
is(new Map().entries());
// true
is(['speed', 'of', 'causality']);
// false
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
