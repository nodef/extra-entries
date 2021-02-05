[Entries] is a list of key-value pairs, with unique keys.<br>
:package: [NPM](https://www.npmjs.com/package/extra-entries),
:smiley_cat: [GitHub](https://github.com/orgs/nodef/packages?repo_name=extra-entries),
:running: [RunKit](https://npm.runkit.com/extra-entries),
:vhs: [Asciinema](https://asciinema.org/a/341125),
:moon: [Minified](https://www.npmjs.com/package/extra-entries.min),
:scroll: [Files](https://unpkg.com/extra-entries/),
:newspaper: [JSDoc](https://nodef.github.io/extra-entries/),
:blue_book: [Wiki](https://github.com/nodef/extra-entries/wiki/).

All functions except `from*()` take entries as 1st parameter, and expect it
to be [iterable]. It does not need to be an array. **Entries** are returned
by `Array`, `Object`, `Set`, `Map`.

Methods as separate packages:
- `@extra-entries/find`: use [rollup] to bundle this es module.
- `@extra-entries/find.min`: use in browser ([browserify], [uglify-js]).

> Stability: Experimental.

<br>

```javascript
const entries = require("extra-entries");
// import * as entries from "extra-entries";
// import * as entries from "https://unpkg.com/extra-entries@2.2.10/index.mjs"; (deno)

var x = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
[...entries.filter(x, v => v % 2 === 1)];
// [ [ "a", 1 ], [ "c", 3 ], [ "e", 5 ] ]

var x = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
entries.some(x, v => v > 10);
// false

var x = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
entries.min(x);
// [ "d", -4 ]

var x = [["a", 1], ["b", 2], ["c", 3]];
[...entries.subsets(x)].map(a => [...a]);
// [
//   [],
//   [ [ "a", 1 ] ],
//   [ [ "b", 2 ] ],
//   [ [ "a", 1 ], [ "b", 2 ] ],
//   [ [ "c", 3 ] ],
//   [ [ "a", 1 ], [ "c", 3 ] ],
//   [ [ "b", 2 ], [ "c", 3 ] ],
//   [ [ "a", 1 ], [ "b", 2 ], [ "c", 3 ] ]
// ]
```

<br>
<br>


## Index

| Method                | Action                                       |
| --------------------- | -------------------------------------------- |
| [is]                  | Checks if value is entries.                  |
| [get]                 | Gets value at key.                           |
| [set]                 | Sets value at key.                           |
| [remove]              | Deletes an entry.                            |
| [swap]                | Exchanges two values.                        |
| [size]                | Gets size of entries.                        |
|                       |
| [head]                | Gets first entry.                            |
| [take]                | Keeps first n entries only.                  |
| [shift]               | Removes first entry.                         |
| [fromLists]           | Creates entries from lists.                  |
|                       |
| [concat]              | Appends entries from maps, preferring last.  |
| [flat]                | Flattens nested entries to given depth.      |
| [chunk]               | Breaks entries into chunks of given size.    |
| [filterAt]            | Gets entries with given keys.                |
|                       |
| [map]                 | Updates values based on map function.        |
| [filter]              | Keeps entries which pass a test.             |
| [reduce]              | Reduces values to a single value.            |
| [range]               | Finds smallest and largest entries.          |
| [count]               | Counts values which satisfy a test.          |
| [partition]           | Segregates values by test result.            |
| [cartesianProduct]    | Lists cartesian product of entries.          |
| [some]                | Checks if any value satisfies a test.        |
| [zip]                 | Combines matching entries from all entries.  |
|                       |
| [union]               | Gives entries present in any entries.        |
| [intersection]        | Gives entries present in both entries.       |
| [difference]          | Gives entries not present in another.        |
| [symmetricDifference] | Gives entries not present in both entries.   |
| [isDisjoint]          | Checks if entries have no common keys.       |
|                       |
| [key]                 | Picks an arbitrary key.                      |
| [value]               | Picks an arbitrary value.                    |
| [entry]               | Picks an arbitrary entry.                    |
| [subset]              | Gives an arbitrary subset.                   |
|                       |
| [isEmpty]             | Checks if entries is empty.                  |
| [isEqual]             | Checks if two maps are equal.                |
| [compare]             | Compares two entries.                        |
| [find]                | Finds a value passing a test.                |
| [search]              | Finds key of an entry passing a test.        |
| [scanWhile]           | Finds key of first entry not passing a test. |

<br>
<br>

[![](https://img.youtube.com/vi/5UABeDXf_iE/maxresdefault.jpg)](https://www.youtube.com/watch?v=5UABeDXf_iE)

[Entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[is]: https://github.com/nodef/extra-entries/wiki/is
[get]: https://github.com/nodef/extra-entries/wiki/get
[set]: https://github.com/nodef/extra-entries/wiki/set
[remove]: https://github.com/nodef/extra-entries/wiki/remove
[swap]: https://github.com/nodef/extra-entries/wiki/swap
[size]: https://github.com/nodef/extra-entries/wiki/size
[head]: https://github.com/nodef/extra-entries/wiki/head
[take]: https://github.com/nodef/extra-entries/wiki/take
[shift]: https://github.com/nodef/extra-entries/wiki/shift
[fromLists]: https://github.com/nodef/extra-entries/wiki/fromLists
[concat]: https://github.com/nodef/extra-entries/wiki/concat
[flat]: https://github.com/nodef/extra-entries/wiki/flat
[chunk]: https://github.com/nodef/extra-entries/wiki/chunk
[filterAt]: https://github.com/nodef/extra-entries/wiki/filterAt
[map]: https://github.com/nodef/extra-entries/wiki/map
[filter]: https://github.com/nodef/extra-entries/wiki/filter
[reduce]: https://github.com/nodef/extra-entries/wiki/reduce
[range]: https://github.com/nodef/extra-entries/wiki/range
[count]: https://github.com/nodef/extra-entries/wiki/count
[partition]: https://github.com/nodef/extra-entries/wiki/partition
[cartesianProduct]: https://github.com/nodef/extra-entries/wiki/cartesianProduct
[some]: https://github.com/nodef/extra-entries/wiki/some
[zip]: https://github.com/nodef/extra-entries/wiki/zip
[union]: https://github.com/nodef/extra-entries/wiki/union
[intersection]: https://github.com/nodef/extra-entries/wiki/intersection
[difference]: https://github.com/nodef/extra-entries/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-entries/wiki/symmetricDifference
[isDisjoint]: https://github.com/nodef/extra-entries/wiki/isDisjoint
[key]: https://github.com/nodef/extra-entries/wiki/key
[value]: https://github.com/nodef/extra-entries/wiki/value
[entry]: https://github.com/nodef/extra-entries/wiki/entry
[subset]: https://github.com/nodef/extra-entries/wiki/subset
[isEmpty]: https://github.com/nodef/extra-entries/wiki/isEmpty
[isEqual]: https://github.com/nodef/extra-entries/wiki/isEqual
[compare]: https://github.com/nodef/extra-entries/wiki/compare
[find]: https://github.com/nodef/extra-entries/wiki/find
[search]: https://github.com/nodef/extra-entries/wiki/search
[scanWhile]: https://github.com/nodef/extra-entries/wiki/scanWhile
