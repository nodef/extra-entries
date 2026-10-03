A collection of functions for operating upon Entries.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-entries),
📦 [NPM](https://www.npmjs.com/package/@nodef/extra-entries),
📰 [Docs](https://jsr.io/@nodef/extra-entries/doc).

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

[Entries]: https://jsr.io/@nodef/extra-entries/doc/~/Entries
[iterable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

<br>

```javascript
import * as xentries from "jsr:@nodef/extra-entries";

var x = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]];
[...xentries.filter(x, v => v % 2 === 1)];
// → [ [ 'a', 1 ], [ 'c', 3 ], [ 'e', 5 ] ]

var x = [['a', 1], ['b', 2], ['c', -3], ['d', -4]];
xentries.some(x, v => v > 10);
// → false

var x = [['a', 1], ['b', 2], ['c', -3], ['d', -4]];
xentries.min(x);
// → -4

var x = [['a', 1], ['b', 2], ['c', 3]];
[...xentries.subsets(x)].map(a => [...a]);
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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-entries)


[is]: https://jsr.io/@nodef/extra-entries/doc/~/is
[keys]: https://jsr.io/@nodef/extra-entries/doc/~/keys
[values]: https://jsr.io/@nodef/extra-entries/doc/~/values
[fromLists]: https://jsr.io/@nodef/extra-entries/doc/~/fromLists
[compare]: https://jsr.io/@nodef/extra-entries/doc/~/compare
[isEqual]: https://jsr.io/@nodef/extra-entries/doc/~/isEqual
[size]: https://jsr.io/@nodef/extra-entries/doc/~/size
[isEmpty]: https://jsr.io/@nodef/extra-entries/doc/~/isEmpty
[get]: https://jsr.io/@nodef/extra-entries/doc/~/get
[getAll]: https://jsr.io/@nodef/extra-entries/doc/~/getAll
[getPath]: https://jsr.io/@nodef/extra-entries/doc/~/getPath
[hasPath]: https://jsr.io/@nodef/extra-entries/doc/~/hasPath
[set]: https://jsr.io/@nodef/extra-entries/doc/~/set
[swap]: https://jsr.io/@nodef/extra-entries/doc/~/swap
[remove]: https://jsr.io/@nodef/extra-entries/doc/~/remove
[count]: https://jsr.io/@nodef/extra-entries/doc/~/count
[countAs]: https://jsr.io/@nodef/extra-entries/doc/~/countAs
[min]: https://jsr.io/@nodef/extra-entries/doc/~/min
[minEntry]: https://jsr.io/@nodef/extra-entries/doc/~/minEntry
[max]: https://jsr.io/@nodef/extra-entries/doc/~/max
[maxEntry]: https://jsr.io/@nodef/extra-entries/doc/~/maxEntry
[range]: https://jsr.io/@nodef/extra-entries/doc/~/range
[rangeEntries]: https://jsr.io/@nodef/extra-entries/doc/~/rangeEntries
[head]: https://jsr.io/@nodef/extra-entries/doc/~/head
[tail]: https://jsr.io/@nodef/extra-entries/doc/~/tail
[take]: https://jsr.io/@nodef/extra-entries/doc/~/take
[drop]: https://jsr.io/@nodef/extra-entries/doc/~/drop
[subsets]: https://jsr.io/@nodef/extra-entries/doc/~/subsets
[randomKey]: https://jsr.io/@nodef/extra-entries/doc/~/randomKey
[randomEntry]: https://jsr.io/@nodef/extra-entries/doc/~/randomEntry
[randomSubset]: https://jsr.io/@nodef/extra-entries/doc/~/randomSubset
[has]: https://jsr.io/@nodef/extra-entries/doc/~/has
[hasValue]: https://jsr.io/@nodef/extra-entries/doc/~/hasValue
[hasEntry]: https://jsr.io/@nodef/extra-entries/doc/~/hasEntry
[hasSubset]: https://jsr.io/@nodef/extra-entries/doc/~/hasSubset
[find]: https://jsr.io/@nodef/extra-entries/doc/~/find
[findAll]: https://jsr.io/@nodef/extra-entries/doc/~/findAll
[search]: https://jsr.io/@nodef/extra-entries/doc/~/search
[searchAll]: https://jsr.io/@nodef/extra-entries/doc/~/searchAll
[searchValue]: https://jsr.io/@nodef/extra-entries/doc/~/searchValue
[searchValueAll]: https://jsr.io/@nodef/extra-entries/doc/~/searchValueAll
[forEach]: https://jsr.io/@nodef/extra-entries/doc/~/forEach
[some]: https://jsr.io/@nodef/extra-entries/doc/~/some
[every]: https://jsr.io/@nodef/extra-entries/doc/~/every
[map]: https://jsr.io/@nodef/extra-entries/doc/~/map
[reduce]: https://jsr.io/@nodef/extra-entries/doc/~/reduce
[filter]: https://jsr.io/@nodef/extra-entries/doc/~/filter
[filterAt]: https://jsr.io/@nodef/extra-entries/doc/~/filterAt
[reject]: https://jsr.io/@nodef/extra-entries/doc/~/reject
[rejectAt]: https://jsr.io/@nodef/extra-entries/doc/~/rejectAt
[flat]: https://jsr.io/@nodef/extra-entries/doc/~/flat
[flatMap]: https://jsr.io/@nodef/extra-entries/doc/~/flatMap
[zip]: https://jsr.io/@nodef/extra-entries/doc/~/zip
[partition]: https://jsr.io/@nodef/extra-entries/doc/~/partition
[partitionAs]: https://jsr.io/@nodef/extra-entries/doc/~/partitionAs
[chunk]: https://jsr.io/@nodef/extra-entries/doc/~/chunk
[concat]: https://jsr.io/@nodef/extra-entries/doc/~/concat
[join]: https://jsr.io/@nodef/extra-entries/doc/~/join
[isDisjoint]: https://jsr.io/@nodef/extra-entries/doc/~/isDisjoint
[unionKeys]: https://jsr.io/@nodef/extra-entries/doc/~/unionKeys
[union]: https://jsr.io/@nodef/extra-entries/doc/~/union
[intersection]: https://jsr.io/@nodef/extra-entries/doc/~/intersection
[difference]: https://jsr.io/@nodef/extra-entries/doc/~/difference
[symmetricDifference]: https://jsr.io/@nodef/extra-entries/doc/~/symmetricDifference
[randomValue]: https://jsr.io/@nodef/extra-entries/doc/~/randomValue
