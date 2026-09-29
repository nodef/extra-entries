import {assertEquals} from "@std/assert";
import * as xarray from "@nodef/extra-array";
import {
  is,
  keys,
  values,
  fromLists,
  compare,
  isEqual,
  size,
  isEmpty,
  get,
  getAll,
  getPath,
  hasPath,
  set,
  swap,
  remove,
  // head,
  // tail,
  // take,
  // drop,
  count,
  countAs,
  min,
  minEntry,
  max,
  maxEntry,
  range,
  rangeEntries,
  subsets,
  randomKey,
  randomValue,
  randomEntry,
  randomSubset,
  has,
  hasValue,
  hasEntry,
  hasSubset,
  find,
  findAll,
  search,
  searchAll,
  searchValue,
  searchValueAll,
  forEach,
  some,
  every,
  map,
  reduce,
  filter,
  filterAt,
  reject,
  rejectAt,
  flat,
  flatMap,
  zip,
  partition,
  partitionAs,
  chunk,
  concat,
  join,
  isDisjoint,
  unionKeys,
  union,
  intersection,
  difference,
  symmetricDifference,
} from "./index.ts";




// ABOUT
// -----

Deno.test("is", () => {
  let a;
  a = is([["a", 1], ["b", 2]]);
  assertEquals(a, true);
  a = is([]);
  assertEquals(a, true);
  a = is(1);
  assertEquals(a, false);
});


Deno.test("keys", () => {
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  const a = keys(x);
  assertEquals([...a], ["a", "b", "c"]);
});


Deno.test("values", () => {
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  const a = values(x);
  assertEquals([...a], [1, 2, 3]);
});




// GENERATE
// --------

Deno.test("fromLists", () => {
  const x: [string[], number[]] = [["a", "b", "c"], [1, 2, 3]];
  const a = fromLists(x);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3]]);
});




// COMPARE
// -------

Deno.test("compare", () => {
  let y: [string, number][], a;
  const x: [string, number][] = [["a", 1], ["b", 2]];
  y = [["a", 1], ["b", 2], ["c", 3]];
  a = compare(x, y);
  assertEquals(a, -1);
  y = [["a", 1], ["b", 2]];
  a = compare(x, y);
  assertEquals(a, 0);
  y = [["a", 1], ["b", -2]];
  a = compare(x, y);
  assertEquals(a, 1);
  a = compare(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, 0);
  a = compare(x, y, null, v => Math.abs(v));
  assertEquals(a, 0);
});


Deno.test("isEqual", () => {
  let y: [string, number][], a;
  const x: [string, number][] = [["a", 1], ["b", 2]];
  y = [["a", 1], ["b", 2]];
  a = isEqual(x, y);
  assertEquals(a, true);
  y = [["a", 11], ["b", 12]];
  a = isEqual(x, y);
  assertEquals(a, false);
  a = isEqual(x, y, (a, b) => (a % 10) - (b % 10));
  assertEquals(a, true);
  a = isEqual(x, y, null, v => v % 10);
  assertEquals(a, true);
});




// SIZE
// ----

Deno.test("size", () => {
  const x = [["a", 1], ["b", 2], ["c", 3]];
  const a = size(x);
  assertEquals(a, 3);
});


Deno.test("isEmpty", () => {
  let x: [string, number][], a;
  x = [["a", 1], ["b", 2], ["c", 3]];
  a = isEmpty(x);
  assertEquals(a, false);
  x = [];
  a = isEmpty(x);
  assertEquals(a, true);
});




// GET/SET
// -------

Deno.test("get", () => {
  let a;
  const x: [string, number][] = [["a", 2], ["b", 4], ["c", 6], ["d", 8]];
  a = get(x, "b");
  assertEquals(a, 4);
  a = get(x, "d");
  assertEquals(a, 8);
});


Deno.test("getAll", () => {
  let a;
  const x: [string, number][] = [["a", 2], ["b", 4], ["c", 6], ["d", 8]];
  a = getAll(x, ["b", "d"]);
  assertEquals([...a], [4, 8]);
  a = getAll(x, ["e"]);
  assertEquals([...a], [undefined]);
});


Deno.test("getPath", () => {
  let a;
  const x: [string, unknown][] = [["a", 2], ["b", 4],  ["c", 6]];
  const y: [string, unknown][] = [["x", x], ["e", 10], ["f", 12]];
  a = getPath(y, ["e"]);
  assertEquals(a, 10);
  a = getPath(y, ["x", "b"]);
  assertEquals(a, 4);
  a = getPath(y, ["x", "b", "c"]);
  assertEquals(a, undefined);
});


Deno.test("hasPath", () => {
  let a;
  const x: [string, unknown][] = [["a", 2], ["b", 4],  ["c", 6]];
  const y: [string, unknown][] = [["x", x], ["e", 10], ["f", 12]];
  a = hasPath(y, ["e"]);
  assertEquals(a, true);
  a = hasPath(y, ["x", "b"]);
  assertEquals(a, true);
  a = hasPath(y, ["x", "b", "c"]);
  assertEquals(a, false);
});


Deno.test("set", () => {
  let a;
  const x: [string, number][] = [["a", 2],  ["b", 4],  ["c", 6], ["d", 8]];
  a = set(x, "b", 40);
  assertEquals([...a], [["a", 2], ["b", 40], ["c", 6], ["d", 8]]);
  a = set(x, "d", 80);
  assertEquals([...a], [["a", 2], ["b", 4],  ["c", 6], ["d", 80]]);
});


Deno.test("swap", () => {
  let a;
  const x: [string, number][] = [["a", 1],  ["b", 2], ["c", 3], ["d", 4]];
  a = swap(x, "a", "b");
  assertEquals([...a], [["a", 2], ["b", 1], ["c", 3], ["d", 4]]);
  a = swap(x, "a", "d");
  assertEquals([...a], [["a", 4], ["b", 2], ["c", 3], ["d", 1]]);
});


Deno.test("remove", () => {
  let a;
  const x: [string, number][] = [["a", 2],  ["b", 4], ["c", 6], ["d", 8]];
  a = remove(x, "b");
  assertEquals([...a], [["a", 2], ["c", 6], ["d", 8]]);
  a = remove(x, "d");
  assertEquals([...a], [["a", 2], ["b", 4], ["c", 6]]);
});




// PROPERTY
// --------

Deno.test("count", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 1], ["c", 2], ["d", 2], ["e", 4]];
  a = count(x, v => v % 2 === 1);
  assertEquals(a, 2);
  a = count(x, v => v % 2 === 0);
  assertEquals(a, 3);
});


Deno.test("countAs", () => {
  let x: [string, number][], a;
  x = [["a", 1], ["b", 1], ["c", 2], ["d", 2], ["e", 4]];
  a = countAs(x);
  assertEquals(a, new Map([[1, 2], [2, 2], [4, 1]]));
  x = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  a = countAs(x, v => v % 2);
  assertEquals(a, new Map([[1, 2], [0, 2]]));
})


Deno.test("min", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = min(x);
  assertEquals(a, -4);
  a = min(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, 1);
  a = min(x, null, v => Math.abs(v));
  assertEquals(a, 1);
});


Deno.test("minEntry", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = minEntry(x);
  assertEquals(a, ["d", -4]);
  a = minEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, ["a", 1]);
  a = minEntry(x, null, v => Math.abs(v));
  assertEquals(a, ["a", 1]);
});


Deno.test("max", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = max(x);
  assertEquals(a, 2);
  a = max(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, -4);
  a = max(x, null, v => Math.abs(v));
  assertEquals(a, -4);
});


Deno.test("maxEntry", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = maxEntry(x);
  assertEquals(a, ["b", 2]);
  a = maxEntry(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, ["d", -4]);
  a = maxEntry(x, null, v => Math.abs(v));
  assertEquals(a, ["d", -4]);
});


Deno.test("range", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = range(x);
  assertEquals(a, [-4, 2]);
  a = range(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, [1, -4]);
  a = range(x, null, v => Math.abs(v));
  assertEquals(a, [1, -4]);
});


Deno.test("rangeEntries", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = rangeEntries(x);
  assertEquals(a, [["d", -4], ["b", 2]]);
  a = rangeEntries(x, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, [["a", 1], ["d", -4]]);
  a = rangeEntries(x, null, v => Math.abs(v));
  assertEquals(a, [["a", 1], ["d", -4]]);
});




// ARRANGEMENTS
// ------------

Deno.test("subsets", () => {
  let x: [string, number][], a;
  x = [["a", 1], ["b", 2]];
  a = subsets(x);
  assertEquals([...a].map(x => [...x]), [[], [["a", 1]], [["b", 2]], [["a", 1], ["b", 2]]]);
  x = [["a", 1], ["b", 2], ["c", 3]];
  a = subsets(x);
  assertEquals([...a].map(x => [...x]), [
    [],
    [["a", 1]],
    [["b", 2]],
    [["a", 1], ["b", 2]],
    [["c", 3]],
    [["a", 1], ["c", 3]],
    [["b", 2], ["c", 3]],
    [["a", 1], ["b", 2], ["c", 3]]
  ]);
});


Deno.test("randomKey", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  a = randomKey(x);
  assertEquals(has(x, a), true);
  a = randomKey(x);
  assertEquals(has(x, a), true);
});


Deno.test("randomValue", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  a = randomValue(x);
  assertEquals(hasValue(x, a), true);
  a = randomValue(x);
  assertEquals(hasValue(x, a), true);
});


Deno.test("randomEntry", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  a = randomEntry(x);
  assertEquals(hasEntry(x, a), true);
  a = randomEntry(x);
  assertEquals(hasEntry(x, a), true);
});


Deno.test("randomSubset", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  a = randomSubset(x);
  assertEquals(hasSubset(x, a), true);
  a = randomSubset(x, 3);
  assertEquals(hasSubset(x, a), true);
  assertEquals([...a].length, 3);
  a = randomSubset(x, 2);
  assertEquals(hasSubset(x, a), true);
  assertEquals([...a].length, 2);
});




// FIND
// ----

Deno.test("has", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3]];
  a = has(x, "d");
  assertEquals(a, false);
  a = has(x, "c");
  assertEquals(a, true);
});


Deno.test("hasValue", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3]];
  a = hasValue(x, 3);
  assertEquals(a, false);
  a = hasValue(x, 3, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, true);
  a = hasValue(x, 3, null, v => Math.abs(v));
  assertEquals(a, true);
});


Deno.test("hasEntry", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3]];
  a = hasEntry(x, ["c", 3]);
  assertEquals(a, false);
  a = hasEntry(x, ["c", 3], (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, true);
  a = hasEntry(x, ["c", 3], null, v => Math.abs(v));
  assertEquals(a, true);
});


Deno.test("hasSubset", () => {
  let y: [string, number][], a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  y = [["b", 2], ["d", 4]];
  a = hasSubset(x, y);
  assertEquals(a, true);
  y = [["b", -2], ["d", -4]];
  a = hasSubset(x, y);
  assertEquals(a, false);
  a = hasSubset(x, y, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, true);
  a = hasSubset(x, y, null, v => Math.abs(v));
  assertEquals(a, true);
})


Deno.test("find", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  a = find(x, v => v % 2 === 0);
  assertEquals(a, 2);
  a = find(x, v => v % 8 === 0);
  assertEquals(a, undefined);
});


Deno.test("findAll", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  a = findAll(x, v => v % 2 === 0);
  assertEquals([...a], [2, 4]);
  a = findAll(x, v => v % 8 === 0);
  assertEquals([...a], []);
});


Deno.test("search", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 2]];
  a = search(x, v => v === 2);
  assertEquals(a, "b");
  a = search(x, v => v === 4);
  assertEquals(a, undefined);
});


Deno.test("searchAll", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", -2]];
  a = searchAll(x, v => v === 2);
  assertEquals([...a], ["b"]);
  a = searchAll(x, v => Math.abs(v) === 2);
  assertEquals([...a], ["b", "d"]);
});


Deno.test("searchValue", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", -2], ["c", 3], ["d", 2], ["e", 5]];
  a = searchValue(x, 2);
  assertEquals(a, "d");
  a = searchValue(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals(a, "b");
  a = searchValue(x, 2, null, v => Math.abs(v));
  assertEquals(a, "b");
});


Deno.test("searchValueAll", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", -2], ["c", 3], ["d", 2], ["e", 5]];
  a = searchValueAll(x, 2);
  assertEquals([...a], ["d"]);
  a = searchValueAll(x, 2, (a, b) => Math.abs(a) - Math.abs(b));
  assertEquals([...a], ["b", "d"]);
  a = searchValueAll(x, 2, null, v => Math.abs(v));
  assertEquals([...a], ["b", "d"]);
});




// FUNCTIONAL
// ----------

Deno.test("forEach", () => {
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]]
  const a: number[] = [];
  forEach(x, v => a.push(v));
  assertEquals(a, [1, 2, -3, -4]);
});


Deno.test("some", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = some(x, v => v > 10);
  assertEquals(a, false);
  a = some(x, v => v < 0);
  assertEquals(a, true);
});


Deno.test("every", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", -3], ["d", -4]];
  a = every(x, v => v > 0);
  assertEquals(a, false);
  a = every(x, v => v > -10);
  assertEquals(a, true);
});


Deno.test("map", () => {
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  const a = map(x, v => v * 2);
  assertEquals([...a], [["a", 2], ["b", 4], ["c", 6], ["d", 8]]);
});


Deno.test("reduce", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  a = reduce(x, (acc, v) => acc+v);
  assertEquals(a, 10);
  a = reduce(x, (acc, v) => acc+v, 100);
  assertEquals(a, 110);
});


Deno.test("filter", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  a = filter(x, v => v % 2 === 1);
  assertEquals([...a], [["a", 1], ["c", 3], ["e", 5]]);
  a = filter(x, v => v % 2 === 0);
  assertEquals([...a], [["b", 2], ["d", 4]]);
});


Deno.test("filterAt", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  a = filterAt(x, ["a", "c", "e"]);
  assertEquals([...a], [["a", 1], ["c", 3], ["e", 5]]);
  a = filterAt(x, ["b", "d"]);
  assertEquals([...a], [["b", 2], ["d", 4]]);
});


Deno.test("reject", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  a = reject(x, v => v % 2 === 1);
  assertEquals([...a], [["b", 2], ["d", 4]]);
  a = reject(x, v => v % 2 === 0);
  assertEquals([...a], [["a", 1], ["c", 3], ["e", 5]]);
});


Deno.test("rejectAt", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  a = rejectAt(x, ["a", "c", "e"]);
  assertEquals([...a], [["b", 2], ["d", 4]]);
  a = rejectAt(x, ["b", "d"]);
  assertEquals([...a], [["a", 1], ["c", 3], ["e", 5]]);
});


Deno.test("flat", () => {
  let a;
  const x: [string, unknown][] = [
    ["ab",  [["a", 1], ["b", 2]]],
    ["cde", [["c", 3], ["de", [["d", 4], ["e", [["e", 5]]]]]]]
  ];
  a = flat(x);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
  a = flat(x, 1);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["de", [["d", 4], ["e", [["e", 5]]]]]]);
  a = flat(x, 2);
  assertEquals([...a], [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", [["e", 5]]],
  ]);
});


Deno.test("flatMap", () => {
  let a;
  const x: [string, unknown][] = [
    ["ab",  [["a", 1], ["b", 2]]],
    ["cde", [["c", 3], ["de", [["d", 4], ["e", [["e", 5]]]]]]]
  ];
  a = flatMap(x);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["de", [["d", 4], ["e", [["e", 5]]]]]]);
  a = flatMap(x, v => flat(v as [string, unknown][], 1));
  assertEquals([...a], [
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
    ["e", [["e", 5]]],
  ]);
  a = flatMap(x, v => flat(v as [string, unknown][]));
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]]);
});


Deno.test("zip", () => {
  let a;
  const x: [string, number][] = [["a", 1],  ["b", 2], ["c", 3]];
  const y: [string, number][] = [["a", 10], ["b", 20]];
  a = zip([x, y]);
  assertEquals([...a], [["a", [1, 10]], ["b", [2, 20]]]);  // shortest
  a = zip([x, y], ([a, b]) => a + b);
  assertEquals([...a], [["a", 11], ["b", 22]]);
  a = zip([x, y], null, xarray.some);
  assertEquals([...a], [["a", [1, 10]], ["b", [2, 20]]]);  // shortest
  a = zip([x, y], null, xarray.every, 0);
  assertEquals([...a], [["a", [1, 10]], ["b", [2, 20]], ["c", [3, 0]]]);  // longest
});




// MANIPULATION
// ------------

Deno.test("partition", () => {
  let x: [string, number][], a;
  x = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  a = partition(x, v => v % 2 == 0).map(x => [...x]);
  assertEquals(a, [[["b", 2], ["d", 4]], [["a", 1], ["c", 3]]]);
  x = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  a = partition(x, v => v % 2 == 1).map(x => [...x]);
  assertEquals(a, [[["a", 1], ["c", 3], ["e", 5]], [["b", 2], ["d", 4]]]);
});


Deno.test("partitionAs", () => {
  let x: [string, number][];
  x = [["a", 1], ["b", 2], ["c", 3], ["d", 4]];
  const a = partitionAs(x, v => v % 2 == 0);
  assertEquals(a, new Map([
    [false, [["a", 1], ["c", 3]]],
    [true,  [["b", 2], ["d", 4]]],
  ]));
  x = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  const b = partitionAs(x, v => v % 3);
  assertEquals(b, new Map([
    [1, [["a", 1], ["d", 4]]],
    [2, [["b", 2], ["e", 5]]],
    [0, [["c", 3]]],
  ]));
});


Deno.test("chunk", () => {
  let a;
  const x: [string, number][] = [
    ["a", 1], ["b", 2], ["c", 3], ["d", 4],
    ["e", 5], ["f", 6], ["g", 7], ["h", 8]
  ];
  a = chunk(x, 3).map(x => [...x]);
  assertEquals(a, [
    [["a", 1], ["b", 2], ["c", 3]],
    [["d", 4], ["e", 5], ["f", 6]],
    [["g", 7], ["h", 8]]
  ]);
  a = chunk(x, 2, 3).map(x => [...x]);
  assertEquals(a, [
    [["a", 1], ["b", 2]],
    [["d", 4], ["e", 5]],
    [["g", 7], ["h", 8]]
  ]);
  a = chunk(x, 4, 3).map(x => [...x]);
  assertEquals(a, [
    [["a", 1], ["b", 2], ["c", 3], ["d", 4]],
    [["d", 4], ["e", 5], ["f", 6], ["g", 7]],
    [["g", 7], ["h", 8]]
  ]);
});




// COMBINE
// -------

Deno.test("concat", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2]];
  const y: [string, number][] = [["c", 3], ["d", 4]];
  a = concat(x, y);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
  const z: [string, number][] = [["d", 40], ["e", 50]];
  a = concat(x, y, z);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["d", 40], ["e", 50]]);
});


Deno.test("join", () => {
  let a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  a = join(x);
  assertEquals(a, "a=1,b=2,c=3");
  a = join(x, ", ", " => ");
  assertEquals(a, "a => 1, b => 2, c => 3");
});




// SET OPERATIONS
// --------------

Deno.test("isDisjoint", () => {
  let y: [string, number][], a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
  y = [["c", 3], ["d", 4]];
  a = isDisjoint(x, y);
  assertEquals(a, false);
  y = [["d", 4]];
  a = isDisjoint(x, y);
  assertEquals(a, true);
});


Deno.test("unionKeys", () => {
  const x: [string, number][] = [["a", 1],  ["b", 2],  ["c", 3], ["d", 4]];
  const y: [string, number][] = [["b", 20], ["c", 30], ["e", 50]];
  const a = unionKeys(x, y);
  assertEquals(a, new Set(["a", "b", "c", "d", "e"]));
});


Deno.test("union", () => {
  let a;
  const x: [string, number][] = [["a", 1],  ["b", 2],  ["c", 3]];
  const y: [string, number][] = [["b", 20], ["c", 30], ["d", 40]];
  a = union(x, y);
  assertEquals([...a], [["a", 1], ["b", 2],  ["c", 3],  ["d", 40]]);
  a = union(x, y, (_a, b) => b);
  assertEquals([...a], [["a", 1], ["b", 20], ["c", 30], ["d", 40]]);
});


Deno.test("intersection", () => {
  let a;
  const x: [string, number][] = [["a", 1],  ["b", 2],  ["c", 3], ["d", 4]];
  const y: [string, number][] = [["b", 20], ["c", 30], ["e", 50]];
  a = intersection(x, y);
  assertEquals([...a], [["b", 2],  ["c", 3]]);
  a = intersection(x, y, (_a, b) => b);
  assertEquals([...a], [["b", 20], ["c", 30]]);
});


Deno.test("difference", () => {
  let y: [string, number][], a;
  const x: [string, number][] = [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5]];
  y = [["b", 2], ["d", 4]];
  a = difference(x, y);
  assertEquals([...a], [["a", 1], ["c", 3], ["e", 5]]);
  y = [["b", -2], ["d", -4]];
  a = difference(x, y);
  assertEquals([...a], [["a", 1], ["c", 3], ["e", 5]]);
});


Deno.test("symmetricDifference", () => {
  let y: [string, number][], a;
  const x: [string, number][] = [["a", 1],  ["b", 2],  ["c", 3],  ["d", 4]];
  y = [["c", 30], ["d", 40], ["e", 50], ["f", 60]];
  a = symmetricDifference(x, y);
  assertEquals([...a], [["a", 1], ["b", 2],  ["e", 50], ["f", 60]]);
  y = [["d", 40], ["e", 50], ["f", 60]];
  a = symmetricDifference(x, y);
  assertEquals([...a], [["a", 1], ["b", 2], ["c", 3], ["e", 50], ["f", 60]]);
});
