[Entries] is a list of key-value pairs, with unique keys. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-entries/find`: use [rollup] to bundle this es module.
- `@extra-entries/find.min`: use in browser ([browserify], [uglify-js]).

After Mount St. Helens erupted, researchers had a blank slate from which to
explore the science of ecological recovery. Scientist Charley Crisafulli was
drawn to log-covered Spirit Lake, where nutrient rich waters fueled an
unusually fast resurgence in fish, plant life and amphibians. It’s a
phenomenon that continues to fascinate scientists everywhere. Originally
broadcast in 2008. [(1)]

> Stability: Experimental.

```javascript
const entries = require('extra-entries');
// import * as entries from 'extra-entries';
// import * as entries from 'https://unpkg.com/extra-entries@2.1.0/index.mjs'; (deno)

var x = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]];
[...entries.filter(x, v => v % 2 === 1)];
// [ [ 'a', 1 ], [ 'c', 3 ], [ 'e', 5 ] ]

var x = [['a', 1], ['b', 2], ['c', -3], ['d', -4]];
entries.some(x, v => v > 10);
// false

var x = [['a', 1], ['b', 2], ['c', -3], ['d', -4]];
entries.min(x);
// [ 'd', -4 ]

var x = [['a', 1], ['b', 2], ['c', 3]];
[...entries.submaps(x)].map(a => [...a]);
// [
//   [],
//   [ [ 'a', 1 ] ],
//   [ [ 'b', 2 ] ],
//   [ [ 'a', 1 ], [ 'b', 2 ] ],
//   [ [ 'c', 3 ] ],
//   [ [ 'a', 1 ], [ 'c', 3 ] ],
//   [ [ 'b', 2 ], [ 'c', 3 ] ],
//   [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// ]
```

### reference

| Method                | Action
|-----------------------|-------
| [is]                  | Checks if value is map.
| [get]                 | Gets value at key.
| [set]                 | Sets value at key.
| [remove]              | Deletes an entry.
| [swap]                | Exchanges two values.
| [size]                | Gets size of map.
|                       | 
| [head]                | Gets first entry.
| [take]                | Keeps first n entries only.
| [shift]               | Removes first entry.
| [fromLists]           | Creates object from entries.
|                       | 
| [concat]              | Appends entries from maps, preferring last.
| [flat]                | Flattens nested map to given depth.
| [chunk]               | Breaks map into chunks of given size.
| [filterAt]            | Gets map with given keys.
|                       | 
| [map]                 | Updates values based on map function.
| [filter]              | Keeps entries which pass a test.
| [reduce]              | Reduces values to a single value.
| [range]               | Finds smallest and largest entries.
| [count]               | Counts values which satisfy a test.
| [partition]           | Segregates values by test result.
| [cartesianProduct]    | Lists cartesian product of maps.
| [some]                | Checks if any value satisfies a test.
| [zip]                 | Combines matching entries from maps.
|                       | 
| [union]               | Gives entries present in any map.
| [intersection]        | Gives entries present in both maps.
| [difference]          | Gives entries of map not present in another.
| [symmetricDifference] | Gives entries not present in both maps.
| [isDisjoint]          | Checks if maps have no common keys.
|                       | 
| [key]                 | Picks an arbitrary key.
| [value]               | Picks an arbitrary value.
| [entry]               | Picks an arbitrary entry.
| [submap]              | Picks an arbitrary submap.
|                       | 
| [isEmpty]             | Checks if map is empty.
| [isEqual]             | Checks if two maps are equal.
| [compare]             | Compares two maps.
| [find]                | Finds a value passing a test.
| [search]              | Finds key of an entry passing a test.
| [scanWhile]           | Finds key of first entry not passing a test.

<br>

[![nodef](https://merferry.glitch.me/card/extra-entries.svg)](https://nodef.github.io)

[(1)]: https://www.youtube.com/watch?v=5UABeDXf_iE
[Entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[:running:]: https://npm.runkit.com/extra-entries
[:package:]: https://www.npmjs.com/package/extra-entries
[:moon:]: https://www.npmjs.com/package/extra-entries.min
[:ledger:]: https://unpkg.com/extra-entries/
[:vhs:]: https://asciinema.org/a/340339
