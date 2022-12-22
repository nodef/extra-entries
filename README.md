A collection of functions for operating upon Entries.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-entries),
🌐 [Web](https://www.npmjs.com/package/extra-entries.web),
📜 [Files](https://unpkg.com/extra-entries/),
📰 [Docs](https://nodef.github.io/extra-entries/),
📘 [Wiki](https://github.com/nodef/extra-entries/wiki/).

[Entries] is a list of key-value pairs, with unique keys. This package
includes common functions related to querying **about** entries, **generating**
them, **comparing** one with another, finding their **size**, **adding** and
**removing** entries, obtaining its **properties**, getting a **part** of it,
getting a **subset** entries in it, **finding** an entry in it, performing
**functional** operations, **manipulating** it in various ways, **combining**
together entries or its sub-entries, of performing **set operations** upon it.

All functions except `fromLists()` take entries as 1st parameter, and expect it
to be [iterable]. It does not need to be an array. **Entries** are returned
by `Array`, `Object`, `Set`, `Map`.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_entries` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[Entries]: https://github.com/nodef/extra-entries/wiki/Entries
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-iterable.web/index.js

<br>

```javascript
const entries = require('extra-entries');
// import * as entries from "extra-entries";
// import * as entries from "https://unpkg.com/extra-entries/index.mjs"; (deno)

var x = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]];
[...entries.filter(x, v => v % 2 === 1)];
// → [ [ 'a', 1 ], [ 'c', 3 ], [ 'e', 5 ] ]

var x = [['a', 1], ['b', 2], ['c', -3], ['d', -4]];
entries.some(x, v => v > 10);
// → false

var x = [['a', 1], ['b', 2], ['c', -3], ['d', -4]];
entries.min(x);
// → -4

var x = [['a', 1], ['b', 2], ['c', 3]];
[...entries.subsets(x)].map(a => [...a]);
// → [
// →   [],
// →   [ [ 'a', 1 ] ],
// →   [ [ 'b', 2 ] ],
// →   [ [ 'a', 1 ], [ 'b', 2 ] ],
// →   [ [ 'c', 3 ] ],
// →   [ [ 'a', 1 ], [ 'c', 3 ] ],
// →   [ [ 'b', 2 ], [ 'c', 3 ] ],
// →   [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// → ]
```

<br>
<br>


## Index


| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is an iterable. |
| [keys] | List all keys. |
| [values] | List all values. |
|  |  |
| [fromLists] | Convert lists to entries. |
|  |  |
| [compare] | Compare two entries. |
| [isEqual] | Check if two entries are equal. |
|  |  |
| [size] | Find the length of an iterable. |
| [isEmpty] | Check if an iterable is empty. |
|  |  |
| [get] | Get value at key. |
| [getAll] | Get values at keys. |
| [getPath] | Get value at path in nested entries. |
| [hasPath] | Check if nested entries has a path. |
| [set] | Set value at key. |
| [swap] | Exchange two values. |
| [remove] | Remove value at key. |
|  |  |
| [count] | Count values which satisfy a test. |
| [countAs] | Count occurrences of values. |
| [min] | Find smallest value. |
| [minEntry] | Find smallest entry. |
| [max] | Find largest value. |
| [maxEntry] | Find largest entry. |
| [range] | Find smallest and largest values. |
| [rangeEntries] | Find smallest and largest entries. |
|  |  |
| [head] | Get first value. |
| [tail] | Get values except first. |
| [take] | Keep first n values only. |
| [drop] | Discard first n values only. |
|  |  |
| [subsets] | List all possible subsets. |
| [randomKey] | Pick an arbitrary key. |
| [randomEntry] | Pick an arbitrary entry. |
| [randomSubset] | Pick an arbitrary subset. |
|  |  |
| [has] | Check if entries has a key. |
| [hasValue] | Check if entries has a value. |
| [hasEntry] | Check if entries has an entry. |
| [hasSubset] | Check if entries has a subset. |
| [find] | Find first value passing a test (default order). |
| [findAll] | Find values passing a test. |
| [search] | Finds key of an entry passing a test. |
| [searchAll] | Find keys of entries passing a test. |
| [searchValue] | Find a key with given value. |
| [searchValueAll] | Finds keys with given value. |
|  |  |
| [forEach] | Call a function for each value. |
| [some] | Check if any value satisfies a test. |
| [every] | Check if all values satisfy a test. |
| [map] | Transform values of entries. |
| [reduce] | Reduce values of entries to a single value. |
| [filter] | Keep entries which pass a test. |
| [filterAt] | Keep entries with given keys. |
| [reject] | Discard entries which pass a test. |
| [rejectAt] | Discard entries with given keys. |
| [flat] | Flatten nested entries to given depth. |
| [flatMap] | Flatten nested entries, based on map function. |
| [zip] | Combine matching entries from all entries. |
|  |  |
| [partition] | Segregate values by test result. |
| [partitionAs] | Segregate entries by similarity. |
| [chunk] | Break entries into chunks of given size. |
|  |  |
| [concat] | Append entries from all entries, preferring last. |
| [join] | Join entries together into a string. |
|  |  |
| [isDisjoint] | Check if entries have no common keys. |
| [unionKeys] | Obtain keys present in any entries. |
| [union] | Obtain entries present in any entries. |
| [intersection] | Obtain entries present in both entries. |
| [difference] | Obtain entries not present in another entries. |
| [symmetricDifference] | Obtain entries not present in both entries. |
| [randomValue] | Pick an arbitrary value. |

<br>
<br>


[![](https://img.youtube.com/vi/5UABeDXf_iE/maxresdefault.jpg)](https://www.youtube.com/watch?v=5UABeDXf_iE)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-entries/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-entries?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4624983540e6b87358dc/test_coverage)](https://codeclimate.com/github/nodef/extra-entries/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4624983540e6b87358dc/maintainability)](https://codeclimate.com/github/nodef/extra-entries/maintainability)


[is]: https://github.com/nodef/extra-entries/wiki/is
[keys]: https://github.com/nodef/extra-entries/wiki/keys
[values]: https://github.com/nodef/extra-entries/wiki/values
[fromLists]: https://github.com/nodef/extra-entries/wiki/fromLists
[compare]: https://github.com/nodef/extra-entries/wiki/compare
[isEqual]: https://github.com/nodef/extra-entries/wiki/isEqual
[size]: https://github.com/nodef/extra-entries/wiki/size
[isEmpty]: https://github.com/nodef/extra-entries/wiki/isEmpty
[get]: https://github.com/nodef/extra-entries/wiki/get
[getAll]: https://github.com/nodef/extra-entries/wiki/getAll
[getPath]: https://github.com/nodef/extra-entries/wiki/getPath
[hasPath]: https://github.com/nodef/extra-entries/wiki/hasPath
[set]: https://github.com/nodef/extra-entries/wiki/set
[swap]: https://github.com/nodef/extra-entries/wiki/swap
[remove]: https://github.com/nodef/extra-entries/wiki/remove
[count]: https://github.com/nodef/extra-entries/wiki/count
[countAs]: https://github.com/nodef/extra-entries/wiki/countAs
[min]: https://github.com/nodef/extra-entries/wiki/min
[minEntry]: https://github.com/nodef/extra-entries/wiki/minEntry
[max]: https://github.com/nodef/extra-entries/wiki/max
[maxEntry]: https://github.com/nodef/extra-entries/wiki/maxEntry
[range]: https://github.com/nodef/extra-entries/wiki/range
[rangeEntries]: https://github.com/nodef/extra-entries/wiki/rangeEntries
[head]: https://github.com/nodef/extra-entries/wiki/head
[tail]: https://github.com/nodef/extra-entries/wiki/tail
[take]: https://github.com/nodef/extra-entries/wiki/take
[drop]: https://github.com/nodef/extra-entries/wiki/drop
[subsets]: https://github.com/nodef/extra-entries/wiki/subsets
[randomKey]: https://github.com/nodef/extra-entries/wiki/randomKey
[randomEntry]: https://github.com/nodef/extra-entries/wiki/randomEntry
[randomSubset]: https://github.com/nodef/extra-entries/wiki/randomSubset
[has]: https://github.com/nodef/extra-entries/wiki/has
[hasValue]: https://github.com/nodef/extra-entries/wiki/hasValue
[hasEntry]: https://github.com/nodef/extra-entries/wiki/hasEntry
[hasSubset]: https://github.com/nodef/extra-entries/wiki/hasSubset
[find]: https://github.com/nodef/extra-entries/wiki/find
[findAll]: https://github.com/nodef/extra-entries/wiki/findAll
[search]: https://github.com/nodef/extra-entries/wiki/search
[searchAll]: https://github.com/nodef/extra-entries/wiki/searchAll
[searchValue]: https://github.com/nodef/extra-entries/wiki/searchValue
[searchValueAll]: https://github.com/nodef/extra-entries/wiki/searchValueAll
[forEach]: https://github.com/nodef/extra-entries/wiki/forEach
[some]: https://github.com/nodef/extra-entries/wiki/some
[every]: https://github.com/nodef/extra-entries/wiki/every
[map]: https://github.com/nodef/extra-entries/wiki/map
[reduce]: https://github.com/nodef/extra-entries/wiki/reduce
[filter]: https://github.com/nodef/extra-entries/wiki/filter
[filterAt]: https://github.com/nodef/extra-entries/wiki/filterAt
[reject]: https://github.com/nodef/extra-entries/wiki/reject
[rejectAt]: https://github.com/nodef/extra-entries/wiki/rejectAt
[flat]: https://github.com/nodef/extra-entries/wiki/flat
[flatMap]: https://github.com/nodef/extra-entries/wiki/flatMap
[zip]: https://github.com/nodef/extra-entries/wiki/zip
[partition]: https://github.com/nodef/extra-entries/wiki/partition
[partitionAs]: https://github.com/nodef/extra-entries/wiki/partitionAs
[chunk]: https://github.com/nodef/extra-entries/wiki/chunk
[concat]: https://github.com/nodef/extra-entries/wiki/concat
[join]: https://github.com/nodef/extra-entries/wiki/join
[isDisjoint]: https://github.com/nodef/extra-entries/wiki/isDisjoint
[unionKeys]: https://github.com/nodef/extra-entries/wiki/unionKeys
[union]: https://github.com/nodef/extra-entries/wiki/union
[intersection]: https://github.com/nodef/extra-entries/wiki/intersection
[difference]: https://github.com/nodef/extra-entries/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-entries/wiki/symmetricDifference
[randomValue]: https://github.com/nodef/extra-entries/wiki/randomValue
