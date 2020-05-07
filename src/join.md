Join values of [entries] into string, like [Array.join()].

```javascript
const join = require('@extra-entries/join');
// join(<entries>, [format=%k=%v], [separator=,], [start index=0], [values target], [values at], [begin=0], [end], [target=''])
// -> <target>

join(new Map().set('a', 'from').set('b', '1985').entries());
// 'a=from,b=1985'
join(Object.entries({a: 'to', b: '1955'}), "%k = '%v'");
// "a = 'to',b = '1955'"
join(Object.entries({a: 'the', b: 'future'}), '%k = $%i', ' OR ', 1);
// "a = $1 OR b = $2"
join(Object.entries({a: 'back', b: 'to'}), '%k = $%i', ' AND ', 1, val=[]);
// "a = $1 AND b = $2", val = ["back", "to"]
```


[![extra-entries](https://i.imgur.com/iICkjUV.jpg)](https://www.npmjs.com/package/extra-entries)

[entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[Array.join()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
