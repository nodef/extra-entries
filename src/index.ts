import {
  IDENTITY,
  COMPARE,
} from "extra-function";
import {is}      from "extra-iterable";
import {concat$} from "extra-map";




// TYPES
// =====

/** Entries is a list of key-value pairs, with unique keys. */
export type Entries<K, V> = Iterable<[K, V]>;


/** Lists is a pair of key list and value list, with unique keys. */
export type Lists<K, V> = [Iterable<K>, Iterable<V>];


/**
 * Handle reading of a single value.
 * @returns value
 */
export type ReadFunction<V> = () => V;


/**
 * Handle combining of two values.
 * @param a a value
 * @param b another value
 * @returns combined value
 */
export type CombineFunction<V> = (a: V, b: V) => V;


/**
 * Handle comparison of two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
export type CompareFunction<V> = (a: V, b: V) => number;


/**
 * Handle processing of values in entries.
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 */
export type ProcessFunction<K, V> = (v: V, k: K, x: Entries<K, V>) => void;


/**
 * Handle selection of values in entries.
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 * @returns selected?
 */
export type TestFunction<K, V> = (v: V, k: K, x: Entries<K, V>) => boolean;


/**
 * Handle transformation of a value to another.
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 * @returns transformed value
 */
export type MapFunction<K, V, W> = (v: V, k: K, x: Entries<K, V>) => W;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 * @returns reduced value
 */
export type ReduceFunction<K, V, W> = (acc: W, v: V, k: K, x: Entries<K, V>) => W;


/**
 * Handle ending of combined entries.
 * @param dones iᵗʰ entries done?
 * @returns combined entries done?
 */
export type EndFunction = (dones: boolean[]) => boolean;




// METHODS
// =======

// ABOUT
// -----

// Check if value is entries.
export {is} from "extra-iterable";


/**
 * List all keys.
 * @param x entries
 * @returns k₀, k₁, ... | [kᵢ, vᵢ] ∈ x
 */
export function* keys<K, V>(x: Entries<K, V>): Iterable<K> {
  for (var [k] of x)
    yield k;
}


/**
 * List all values.
 * @param x entries
 * @returns v₀, v₁, ... | [kᵢ, vᵢ] ∈ x
 */
export function* values<K, V>(x: Entries<K, V>): Iterable<V> {
  for (var [, v] of x)
    yield v;
}




// GENERATE
// --------

/**
 * Convert lists to entries.
 * @param x lists, i.e. [keys, values]
 * @returns x as entries
 */
export function* fromLists<K, V>(x: Lists<K, V>): Entries<K, V> {
  var [ks, vs] = x;
  var iv = vs[Symbol.iterator]();
  for (var k of ks)
    yield [k, iv.next().value];
}




// COMPARE
// -------

import {compare as mapCompare} from "extra-map";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Compares two entries.
 * @param x entries
 * @param y another entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
function compare<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): number {
  return mapCompare(new Map(x), new Map(y), fc, fm);
}
export default compare;


import compare from "./compare";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Checks if two maps are equal.
 * @param x a map
 * @param y another map
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEqual<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return compare(x, y, fc, fm)===0;
}
export default isEqual;




// SIZE
// ----

export {
  length as size,
  length,
  isEmpty,
} from "extra-iterable";




// GET/SET
// -------

/**
 * Get value at key.
 * @param x entries
 * @param k key
 * @returns x[k]
 */
export function get<K, T>(x: Entries<K, T>, k: K): T {
  for (var [j, u] of x)
    if (j===k) return u;
}


/**
 * Get values at keys.
 * @param x entries
 * @param ks keys
 * @returns x[k₀], x[k₁], ... | [k₀, k₁, ...] = ks
 */
export function getAll<K, T>(x: Entries<K, T>, ks: K[]): Iterable<T> {
  var m = new Map();
  for (var [k, v] of x)
    if (ks.includes(k)) m.set(k, v);
  var a = [];
  for (var k of ks)
    a.push(m.get(k));
  return a;
}


/**
 * Get value at path in nested entries.
 * @param x nested entries
 * @param p path
 * @returns x[k₀][k₁][...] | [k₀, k₁, ...] = p
 */
export function getPath<K>(x: Entries<K, any>, p: K[]): any {
  for (var k of p)
    x = is(x)? get(x, k) : undefined;
  return x;
}


/**
 * Check if nested entries has a path.
 * @param x nested entries
 * @param p search path
 * @returns x[k₀][k₁][...] exists? | [k₀, k₁, ...] = p
 */
export function hasPath<K>(x: Entries<K, any>, p: K[]): boolean {
  return getPath(x, p)!==undefined;
}


/**
 * Set value at key.
 * @param x entries
 * @param k key
 * @param v value
 * @returns x' | x' = x; x'[k] = v
 */
export function* set<K, T>(x: Entries<K, T>, k: K, v: T): Entries<K, T> {
  for (var [j, u] of x)
    yield j===k? [j, v] : [j, u];
}


import {swap as mapSwap} from "extra-map";
import type {Entries} from "./_types";

/**
 * Exchanges two values.
 * @param x entries
 * @param k a key
 * @param l another key
 */
function swap<T, U>(x: Entries<T, U>, k: T, l: T): Entries<T, U> {
  return mapSwap(x, k, l);
}
export default swap;


/**
 * Remove an entry.
 * @param x entries
 * @param k key
 * @returns x - [k, x[k]]
 */
export function* remove<K, T>(x: Entries<K, T>, k: K): Entries<K, T> {
  for (var [j, u] of x)
    if (j!==k) yield [j, u];
}




// PROPERTY
// --------

import {count as mapCount} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Counts values which satisfy a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function count<T, U>(x: Entries<T, U>, ft: testFn<T, U>): number {
  return mapCount(x, ft);
}
export default count;


import {countAs as mapCountAs} from "extra-map";
import type {mapFn, Entries} from "./_types";

/**
 * Counts occurrences of values.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, number> {
  return mapCountAs(x, fm);
}
export default countAs;


import range from "./range";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds smallest entry.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function min<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[0];
}
export default min;


import range from "./range";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds largest entry.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function max<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [T, U] {
  return range(x, fc, fm)[1];
}
export default max;


import {range as mapRange} from "extra-map";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds smallest and largest entries.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [smallest, largest]
 */
function range<T, U, V=U>(x: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): [[T, U], [T, U]] {
  return mapRange(x, fc, fm);
}
export default range;




// PART
// ----

import {head as iterableHead} from "extra-iterable";
import type {Entries} from "./_types";

/**
 * Gets first entry.
 * @param x entries
 * @param ed default entry
 */
function head<T, U>(x: Entries<T, U>, ed: [T, U]=[] as any): [T, U] {
  return iterableHead(x, ed);
}
export default head;


import drop from "./drop";
import type {Entries} from "./_types";

/**
 * Gets entries without the first entry.
 * @param x entries
 */
function* tail<T, U>(x: Entries<T, U>): Entries<T, U> {
  yield* drop(x, 1);
}
export default tail;


import {take as iterableTake} from "extra-iterable";
import type {Entries} from "./_types";

/**
 * Keeps first n entries only.
 * @param x entries
 * @param n number of entries (1)
 */
function* take<T, U>(x: Entries<T, U>, n: number=1): Entries<T, U> {
  yield* iterableTake(x, n);
}
export default take;


import {drop as iterableDrop} from "extra-iterable";
import type {Entries} from "./_types";

/**
 * Removes first n entries.
 * @param x entries
 * @param n number of entries (1)
 */
function drop<T, U>(x: Entries<T, U>, n: number=1): Entries<T, U> {
  return iterableDrop(x, n);
}
export default drop;




// ARRANGEMENTS
// ------------

import {subsets as mapSubsets} from "extra-map";
import type {Entries} from "./_types";

/**
 * Lists all possible subsets.
 * @param x a map
 * @param n number of entries (-1 => any)
 */
function* subsets<T, U>(x: Entries<T, U>, n: number=-1): Iterable<Entries<T, U>> {
  yield* mapSubsets(new Map(x), n);
}
export default subsets;


import keys from "./keys";
import {value} from "extra-array";
import type {Entries} from "./_types";

/**
 * Picks an arbitrary key.
 * @param x entries
 * @param r random seed 0->1
 */
function key<T, U>(x: Entries<T, U>, r: number=Math.random()): T {
  return value([...keys(x)], r);
}
export default key;


import values from "./values";
import {value as arrayValue} from "extra-array";
import type {Entries} from "./_types";

/**
 * Picks an arbitrary value.
 * @param x entries
 * @param r random seed 0->1
 */
function value<T, U>(x: Entries<T, U>, r: number=Math.random()): U {
  return arrayValue([...values(x)], r);
}
export default value;


import {value} from "extra-array";
import type {Entries} from "./_types";

/**
 * Picks an arbitrary entry.
 * @param x entries
 * @param r random seed 0->1
 */
function entry<T, U>(x: Entries<T, U>, r: number=Math.random()): [T, U] {
  return value([...x], r);
}
export default entry;


import {subset as mapSubset} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gives an arbitrary subset.
 * @param x entries
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function subset<T, U>(x: Entries<T, U>, n: number=-1, r: number=Math.random()): Entries<T, U> {
  return mapSubset(new Map(x), n, r);
}
export default subset;




// FIND
// ----

/**
 * Check if entries has a key.
 * @param x entries
 * @param k search key
 * @returns x[k] exists?
 */
export function has<K, T>(x: Entries<K, T>, k: K): boolean {
  for (var [j] of x)
    if (j===k) return true;
  return false;
}


import searchValue from "./searchValue";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Checks if map has a value.
 * @param x a map
 * @param v value?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasValue<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return searchValue(x, v, fc, fm)!==undefined;
}
export default hasValue;


import id from "./_id";
import cmp from "./_cmp";
import get from "./get";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Checks if entries has an entry.
 * @param x entries
 * @param e entry?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasEntry<T, U, V=U>(x: Entries<T, U>, e: [T, U], fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var [k, v] = e, u = get(x, k);
  var u1 = fm(u, k, x);
  var v1 = fm(v, k, x);
  return fc(u1, v1)===0;
}
export default hasEntry;


import {hasSubset as mapHasSubset} from "extra-map";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Checks if entries has a subset.
 * @param x entries
 * @param y subset?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function hasSubset<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  return mapHasSubset(new Map(x), y, fc, fm);
}
export default hasSubset;


/**
 * Find a value passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns v | ft(v) = true; [k, v] ∈ x
 */
export function find<K, T>(x: Entries<K, T>, ft: TestFunction<K, T>): T {
  for (var [k, v] of x)
    if (ft(v, k, x)) return v;
}


import {findAll as mapFindAll} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds values passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function findAll<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Iterable<U> {
  return mapFindAll(x, ft);
}
export default findAll;


import {scanWhile as mapScanWhile} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of first entry not passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function scanWhile<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return mapScanWhile(x, ft);
}
export default scanWhile;


import search from "./search";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of first entry passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function scanUntil<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return search(x, ft);
}
export default scanUntil;


import {search as mapSearch} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds key of an entry passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function search<T, U>(x: Entries<T, U>, ft: testFn<T, U>): T {
  return mapSearch(x, ft);
}
export default search;


import {searchAll as mapSearchAll} from "extra-map";
import type {testFn, Entries} from "./_types";

/**
 * Finds keys of entries passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function searchAll<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Iterable<T> {
  return mapSearchAll(x, ft);
}
export default searchAll;


import {searchValue as mapSearchValue} from "extra-map";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds key with given value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValue<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T {
  return mapSearchValue(x, v, fc, fm);
}
export default searchValue;


import {searchValueAll as mapSearchValueAll} from "extra-map";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds keys with given value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValueAll<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): Iterable<T> {
  return mapSearchValueAll(x, v, fc, fm);
}
export default searchValueAll;




// FUNCTIONAL
// ----------

/**
 * Call a function for each value.
 * @param x entries
 * @param fp process function (v, k, x)
 */
export function forEach<K, T>(x: Entries<K, T>, fp: ProcessFunction<K, T>): void {
  for (var [k, v] of x)
    fp(v, k, x);
}


import scanUntil from "./scanUntil";
import type {testFn, Entries} from "./_types";

/**
 * Checks if any value satisfies a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function some<T, U>(x: Entries<T, U>, ft: testFn<T, U>): boolean {
  return scanUntil(x, ft)!==undefined;
}
export default some;


import scanWhile from "./scanWhile";
import type {testFn, Entries} from "./_types";

/**
 * Checks if all values satisfy a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function every<T, U>(x: Entries<T, U>, ft: testFn<T, U>): boolean {
  return scanWhile(x, ft)===undefined;
}
export default every;


/**
 * Transform values of entries.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns [k₀, fm(v₀)], [k₁, fm(v₁)], ... | [kᵢ, vᵢ] ∈ x
 */
export function* map<K, T, U=T>(x: Entries<K, T>, fm: MapFunction<K, T, T|U>): Entries<K, T|U> {
  for (var [k, v] of x)
    yield [k, fm(v, k, x)];
}


/**
 * Reduce values of entries to a single value.
 * @param x entries
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 * @returns fr(fr(acc, v₀), v₁)... | fr(acc, v₀) = v₀ if acc not given
 */
export function reduce<K, T, U=T>(x: Entries<K, T>, fr: ReduceFunction<K, T, T|U>, acc?: T|U): T|U {
  var init = arguments.length <= 2;
  for (var [k, v] of x) {
    if (init) { init = false; acc = v; }
    else acc = fr(acc, v, k, x);
  }
  return acc;
}


/**
 * Keep the entries which pass a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns [k₀, v₀], [k₁, v₁], ... | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function* filter<K, T>(x: Entries<K, T>, ft: TestFunction<K, T>): Entries<K, T> {
  for (var [k, v] of x)
    if (ft(v, k, x)) yield [k, v];
}


/**
 * Keep entries with given keys.
 * @param x entries
 * @param ks keys
 * @returns [k₀, v₀], [k₁, v₁], ... | vₖ = x[k]; k ∈ ks
 */
export function* filterAt<K, T>(x: Entries<K, T>, ks: K[]): Entries<K, T> {
  for (var [k, v] of x)
    if (ks.includes(k)) yield [k, v];
}


/**
 * Discard the entries which pass a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns [k₀, v₀], [k₁, v₁], ... | ft(vᵢ) = false; [kᵢ, vᵢ] ∈ x
 */
export function* reject<K, T>(x: Entries<K, T>, ft: TestFunction<K, T>): Entries<K, T> {
  for (var [k, v] of x)
    if (!ft(v, k, x)) yield [k, v];
}


/**
 * Discard entries with given keys.
 * @param x entries
 * @param ks keys
 * @returns [k₀, v₀], [k₁, v₁], ... | vₖ = x[k]; k ∉ ks
 */
export function* rejectAt<K, T>(x: Entries<K, T>, ks: K[]): Entries<K, T> {
  for (var [k, v] of x)
    if (!ks.includes(k)) yield [k, v];
}


import is from "./is";
import {flat as mapFlat} from "extra-map";
import type {mapFn, testFn, Entries} from "./_types";

/**
 * Flattens nested entries to given depth.
 * @param x nested entries
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Entries<T, any>, n: number=-1, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Entries<T, any> {
  return mapFlat(x, n, fm, ft||is);
}
export default flat;


/**
 * Flatten nested entries, based on map function.
 * @param x nested entries
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x) [is]
 * @returns flat entries
 */
export function flatMap<K>(x: Entries<K, any>, fm: MapFunction<K, any, any> | null=null, ft: TestFunction<K, any> | null=null): Entries<K, any> {
  var fm = fm || IDENTITY;
  var ft = ft || is;
  var a  = new Map();
  for (var [k, v] of x) {
    var v1 = fm(v, k, x);
    if (ft(v1, k, x)) concat$(a, v1);
    else a.set(k, v1);
  }
  return a;
}


import {zip as mapZip} from "extra-map";
import type {mapFn, tillFn, Entries} from "./_types";

/**
 * Combines matching entries from all entries.
 * @param xs n entries
 * @param fm map function (vs, k)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U, V=U>(xs: Entries<T, U>[], fm: mapFn<T, U[], U[]|V>=null, ft: tillFn=null, vd?: U): Entries<T, U[]|V> {
  return mapZip(xs.map(x => new Map(x)), fm, ft, vd);
}
export default zip;




// MANIPULATION
// ------------

/**
 * Segregate values by test result.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
export function partition<K, T>(x: Entries<K, T>, ft: TestFunction<K, T>): [Entries<K, T>, Entries<K, T>] {
  var t = [], f = [];
  for (var [k, v] of x) {
    if (ft(v, k, x)) t.push([k, v]);
    else f.push([k, v]);
  }
  return [t, f];
}


/**
 * Segregate values by similarity.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns Map \{key ⇒ entries\}
 */
export function partitionAs<K, T, U=T>(x: Entries<K, T>, fm: MapFunction<K, T, T|U>): Map<T|U, Entries<K, T>> {
  var fm = fm || IDENTITY;
  var a  = new Map();
  for (var [k, v] of x) {
    var v1 = fm(v, k, x);
    if (!a.has(v1)) a.set(v1, []);
    a.get(v1).push([k, v]);
  }
  return a;
}


import {chunk as mapChunk} from "extra-map";
import type {Entries} from "./_types";

/**
 * Breaks entries into chunks of given size.
 * @param x entries
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T, U>(x: Entries<T, U>, n: number=1, s: number=n): Entries<T, U>[] {
  return mapChunk(new Map(x), n, s);
}
export default chunk;




// COMBINE
// -------

import {concat as mapConcat} from "extra-map";
import type {Entries} from "./_types";

/**
 * Appends entries from maps, preferring last.
 * @param xs n entries
 */
function concat<T, U>(...xs: Entries<T, U>[]): Entries<T, U> {
  return mapConcat(...xs);
}
export default concat;


/**
 * Join entries together into a string.
 * @param x entries
 * @param sep separator [,]
 * @param asc associator [=]
 * @returns "$\{k₀\}=$\{v₀\}$\{sep\}$\{k₁\}=$\{v₁\}..." | [kᵢ, vᵢ] ∈ x
 */
export function join<K, T>(x: Entries<K, T>, sep: string=",", asc: string="="): string {
  var a = "";
  for (var [k, v] of x)
    a += k + asc + v + sep;
  return a.slice(0, -sep.length);
}




// SET OPERATIONS
// --------------

import {isDisjoint as mapIsDisjoint} from "extra-map";
import type {Entries} from "./_types";

/**
 * Checks if entries have no common keys.
 * @param x entries
 * @param y another entries
 */
function isDisjoint<T, U>(x: Entries<T, U>, y: Entries<T, U>): boolean {
  return mapIsDisjoint(new Map(x), y);
}
export default isDisjoint;


import {unionKeys as mapUnionKeys} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gives keys present in any entries.
 * @param xs n entries
 */
function unionKeys<T, U>(...xs: Entries<T, U>[]): Set<T> {
  return mapUnionKeys(...xs);
}
export default unionKeys;


import {union as mapUnion} from "extra-map";
import type {combineFn, Entries} from "./_types";

/**
 * Gives entries present in any entries.
 * @param x entries
 * @param y another entries
 * @param fc combine function (a, b)
 */
function union<T, U>(x: Entries<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Entries<T, U> {
  return mapUnion(x, y, fc);
}
export default union;


import {intersection as mapIntersection} from "extra-map";
import type {combineFn, Entries} from "./_types";

/**
 * Gives entries present in both entries.
 * @param x entries
 * @param y another entries
 * @param fc combine function (a, b)
 */
function intersection<T, U>(x: Entries<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Entries<T, U> {
  return mapIntersection(new Map(x), y, fc);
}
export default intersection;


import {difference as mapDifference} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gives entries not present in another.
 * @param x entries
 * @param y another entries
 */
function difference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Entries<T, U> {
  return mapDifference(x, y);
}
export default difference;


import {symmetricDifference as mapSymmetricSifference} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gives entries not present in both entries.
 * @param x entries
 * @param y another entries
 */
function symmetricDifference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Entries<T, U> {
  return mapSymmetricSifference(x, y);
}
export default symmetricDifference;
