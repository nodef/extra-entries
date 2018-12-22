Get first key of value in [entries], like [Array.indexOf()].

```javascript
const keyOf = require('@extra-entries/key-of');
// keyOf(<entries>, <search value>, [begin=0], [end])

keyOf(['flintstones', 'jetsons', 'jetsons'].entries(), 'jetsons');
// 1
keyOf(new Set(['ducktales', 'talespin']).entries(), 'ducktales');
// 'ducktales'
keyOf(Object.entries({dexter: 1996, samuraijack: 2001}), 2002);
// undefined
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.indexOf()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
