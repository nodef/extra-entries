Get keys of all values equal to specified value, like [Array.indexOf()].

```javascript
const keysOf = require('@extra-entries/keys-of');
// keysOf(<entries>, <search value>, [begin=0], [end], [target=[]], [at])
// -> <target>

keysOf(['flintstones', 'jetsons', 'jetsons'].entries(), 'jetsons');
// [1, 2]
keysOf(new Set(['ducktales', 'talespin']).entries(), 'ducktales');
// ['ducktales']
keysOf(Object.entries({dexter: 1996, samuraijack: 2001}), 2002);
// []
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[Array.indexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
