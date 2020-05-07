Map values in [entries] to new values, like [Array.map()].

```javascript
const map = require('@extra-entries/map');
// map(<entries>, <map function>, [this], [begin=0], [end], [target=[]], [at])
// - <map function>(<value>, <key>, <entries>)
// -> <target>

map(['WorldWideWeb', 'Mosaic', 'Netscape Navigator'].entries(), (v) => v.toLowerCase());
// [[0, 'worldwideweb'], [1, 'mosaic'], [2, 'netscape navigator']]
map(new Set().add('Internet Explorer').add('Opera').entries(), (v, k, ent) => v.toLowerCase());
// [['Internet Explorer', 'internet explorer'], ['Opera', 'opera']]
map(new Map().set(2002, 'Mozilla Navigator').set(2003, 'Safari').entries(), (v, k, ent) => v.toLowerCase());
// [[2002, 'mozilla navigator'], [2003, 'safari']]
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.map()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
