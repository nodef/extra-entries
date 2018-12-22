Call function for each value of [entries], like [Array.forEach()].

```javascript
const forEach = require('@extra-entries/for-each');
// forEach(<entries>, <called function>, [this], [begin=0], [end])
// - <called function>(<value>, <key>, <entries>)

forEach(['nfs2se', 'spider-man'].entries(), (v) => console.log(v));
// nfs2se
// spider-man
forEach(new Set(['desert storm', 'bh2']).entries(), (v, k, ent) => console.log(v, k));
// desert storm desert storm
// bh2 bh2
forEach(Object.entries({redline: 1999, 'call of duty': 2003}), (v, k, ent) => console.log(v, k, ent.length));
// 1999 'redline' 2
// 2003 'call of duty' 2
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.forEach()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
