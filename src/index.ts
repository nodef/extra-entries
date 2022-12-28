import {
  IDENTITY,
  COMPARE,
} from "extra-function";
import {
  is as iterableIs,
} from "extra-iterable";
import {
  randomValue as arrayRandomValue,
} from "extra-array";
import {
  compare as mapCompare,
  swap$   as mapSwap$,
  subsets as mapSubsets,
  randomSubset as mapRandomSubset,
  hasSubset    as mapHasSubset,
  flat    as mapFlat,
  concat  as mapConcat,
  concat$ as mapConcat$,
  zip     as mapZip,
  chunk   as mapChunk,
  isDisjoint   as mapIsDisjoint,
  unionKeys    as mapUnionKeys,
  union        as mapUnion,
  intersection as mapIntersection,
  difference   as mapDifference,
  symmetricDifference as mapSymmetricSifference,
} from "extra-map";




// RE-EXPORTS
// ==========

export {
  // About
  is,
  // Size
  length as size,
  length,
  isEmpty,
  // Part
  head,
  tail,
  take,
  drop,
} from "extra-iterable";




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

/**
 * Compare two entries.
 * @param x entries
 * @param y another entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x=y: 0, otherwise: -ve/+ve
 */
export function compare<K, V, W=V>(x: Entries<K, V>, y: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): number {
  return mapCompare(new Map(x), new Map(y), fc, fm);
}


/**
 * Check if two entries are equal.
 * @param x entries
 * @param y another entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns x = y?
 */
export function isEqual<K, V, W=V>(x: Entries<K, V>, y: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return compare(x, y, fc, fm)===0;
}




// GET/SET
// -------

/**
 * Get value at key.
 * @param x entries
 * @param k key
 * @returns x[k]
 */
export function get<K, V>(x: Entries<K, V>, k: K): V {
  for (var [j, u] of x)
    if (j===k) return u;
}


/**
 * Get values at keys.
 * @param x entries
 * @param ks keys
 * @returns x[k₀], x[k₁], ... | [k₀, k₁, ...] = ks
 */
export function getAll<K, V>(x: Entries<K, V>, ks: K[]): Iterable<V> {
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
    x = iterableIs(x)? get(x, k) : undefined;
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
export function* set<K, V>(x: Entries<K, V>, k: K, v: V): Entries<K, V> {
  for (var [j, u] of x)
    yield j===k? [j, v] : [j, u];
}


/**
 * Exchange two values.
 * @param x entries
 * @param k a key
 * @param l another key
 * @returns x' | x' = x; x'[k] = x[l]; x'[l] = x[k]
 */
export function swap<K, V>(x: Entries<K, V>, k: K, l: K): Entries<K, V> {
  return mapSwap$(new Map(x), k, l);
}


/**
 * Remove value at key.
 * @param x entries
 * @param k key
 * @returns x \\: [k]
 */
export function* remove<K, V>(x: Entries<K, V>, k: K): Entries<K, V> {
  for (var [j, u] of x)
    if (j!==k) yield [j, u];
}




// PROPERTY
// --------

/**
 * Count values which satisfy a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns Σtᵢ | tᵢ = 1 if ft(vᵢ) else 0; [kᵢ, vᵢ] ∈ x
 */
export function count<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): number {
  var a = 0;
  for (var [k, v] of x)
    if (ft(v, k, x)) ++a;
  return a;
}


/**
 * Count occurrences of values.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns Map \{value ⇒ count\}
 */
export function countAs<K, V, W=V>(x: Entries<K, V>, fm: MapFunction<K, V, V|W> | null=null): Map<V|W, number> {
  var fm = fm || IDENTITY;
  var a  = new Map();
  for (var [k, v] of x) {
    var w = fm(v, k, x);
    var n = a.get(w) || 0;
    a.set(w, n+1);
  }
  return a;
}


/**
 * Find smallest value.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v | v ≤ vᵢ; [kᵢ, vᵢ] ∈ x
 */
export function min<K, V, W=V>(x: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): V {
  return rangeEntries(x, fc, fm)[0][1];
}


/**
 * Find smallest entry.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_key, min_value]
 */
export function minEntry<K, V, W=V>(x: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [K, V] {
  return rangeEntries(x, fc, fm)[0];
}


/**
 * Find largest value.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns v | v ≥ vᵢ; [kᵢ, vᵢ] ∈ x
 */
export function max<K, V, W=V>(x: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): V {
  return rangeEntries(x, fc, fm)[1][1];
}


/**
 * Find largest entry.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [max_key, max_value]
 */
export function maxEntry<K, V, W=V>(x: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [K, V] {
  return rangeEntries(x, fc, fm)[1];
}


/**
 * Find smallest and largest values.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_value, max_value]
 */
export function range<K, V, W=V>(x: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [V, V] {
  var [a, b] = rangeEntries(x, fc, fm);
  return [a[1], b[1]];
}


/**
 * Find smallest and largest entries.
 * @param x entries
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [min_entry, max_entry]
 */
export function rangeEntries<K, V, W=V>(x: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): [[K, V], [K, V]] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var mk: K, mu: V, mv: V|W;
  var nk: K, nu: V, nv: V|W;
  var i = 0;
  for (var [k, u] of x) {
    var v = fm(u, k, x);
    if (i===0 || fc(v, mv)<0) { mk = k; mu = u; mv = v; }
    if (i===0 || fc(v, nv)>0) { nk = k; nu = u; nv = v; }
    ++i;
  }
  return [[mk, mu], [nk, nu]];
}




// ARRANGEMENTS
// ------------

/**
 * List all possible subsets.
 * @param x entries
 * @param n number of entries in each subset [-1 ⇒ any]
 * @returns entries selected by bit from 0..2^|x| if n<0; only of length n otherwise
 */
export function* subsets<K, V>(x: Entries<K, V>, n: number=-1): Iterable<Entries<K, V>> {
  yield* mapSubsets(new Map(x), n);
}


/**
 * Pick an arbitrary key.
 * @param x entries
 * @param fr random number generator ([0, 1))
 * @returns kᵢ | [kᵢ, vᵢ] ∈ x
 */
export function randomKey<K, V>(x: Entries<K, V>, fr: ReadFunction<number>=Math.random): K {
  return arrayRandomValue([...keys(x)], fr);
}
export {randomKey as key};


/**
 * Pick an arbitrary value.
 * @param x entries
 * @param fr random number generator ([0, 1))
 * @returns vᵢ | [kᵢ, vᵢ] ∈ x
 */
export function randomValue<K, V>(x: Entries<K, V>, fr: ReadFunction<number>=Math.random): V {
  return arrayRandomValue([...values(x)], fr);
}
export {randomValue as value};


/**
 * Pick an arbitrary entry.
 * @param x entries
 * @param fr random number generator ([0, 1))
 * @returns [kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x
 */
export function randomEntry<K, V>(x: Entries<K, V>, fr: ReadFunction<number>=Math.random): [K, V] {
  return arrayRandomValue([...x], fr);
}
export {randomEntry as entry};


/**
 * Pick an arbitrary subset.
 * @param x entries
 * @param n number of entries [-1 ⇒ any]
 * @param fr random number generator ([0, 1))
 * @returns \{[kᵢ, vᵢ], [kⱼ, vⱼ], ...\} | [kᵢ, vᵢ], [kⱼ, vⱼ], ... ∈ x; |\{[kᵢ, vᵢ], [kⱼ, vⱼ], ...\}| = |x| if n<0 else n
 */
export function randomSubset<K, V>(x: Entries<K, V>, n: number=-1, fr: ReadFunction<number>=Math.random): Entries<K, V> {
  return mapRandomSubset(new Map(x), n, fr);
}
export {randomSubset as subset};




// FIND
// ----

/**
 * Check if entries has a key.
 * @param x entries
 * @param k search key
 * @returns [k, *] ∈ x?
 */
export function has<K, V>(x: Entries<K, V>, k: K): boolean {
  for (var [j] of x)
    if (j===k) return true;
  return false;
}


/**
 * Check if entries has a value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [*, v] ∈ x?
 */
export function hasValue<K, V, W=V>(x: Entries<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return searchValue(x, v, fc, fm)!==undefined;
}


/**
 * Check if entries has an entry.
 * @param x entries
 * @param e search entry ([k, v])
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns [k, v] ∈ x? | [k, v] = e
 */
export function hasEntry<K, V, W=V>(x: Entries<K, V>, e: [K, V], fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var [k, v] = e, u = get(x, k);
  var u1 = fm(u, k, x);
  var v1 = fm(v, k, x);
  return fc(u1, v1)===0;
}


/**
 * Check if entries has a subset.
 * @param x entries
 * @param y search subset
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns y ⊆ x?
 */
export function hasSubset<K, V, W=V>(x: Entries<K, V>, y: Entries<K, V>, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): boolean {
  return mapHasSubset(new Map(x), new Map(y), fc, fm);
}


/**
 * Find first value passing a test (default order).
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns first v | ft(v) = true; [k, v] ∈ x
 */
export function find<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): V {
  for (var [k, v] of x)
    if (ft(v, k, x)) return v;
}



/**
 * Find values passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns v₀, v₁, ... | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function* findAll<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): Iterable<V> {
  for (var [k, v] of x)
    if (ft(v, k, x)) yield v;
}


/**
 * Finds key of an entry passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns key of entry
 */
export function search<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): K {
  for (var [k, v] of x)
    if (ft(v, k, x)) return k;
}


/**
 * Find keys of entries passing a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns keys of entries
 */
export function* searchAll<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): Iterable<K> {
  for (var [k, v] of x)
    if (ft(v, k, x)) yield k;
}


/**
 * Find a key with given value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns key of value
 */
export function searchValue<K, V, W=V>(x: Entries<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): K {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var w = fm(v, null, null);
  for (var [k, u] of x) {
    var wx = fm(u, k, x);
    if (fc(wx, w)===0) return k;
  }
}


/**
 * Find keys with given value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 * @returns keys of value
 */
export function* searchValueAll<K, V, W=V>(x: Entries<K, V>, v: V, fc: CompareFunction<V|W> | null=null, fm: MapFunction<K, V, V|W> | null=null): Iterable<K> {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var w  = fm(v, null, null);
  for(var [k, u] of x) {
    var wx = fm(u, k, x);
    if (fc(wx, w)===0) yield k;
  }
}




// FUNCTIONAL
// ----------

/**
 * Call a function for each value.
 * @param x entries
 * @param fp process function (v, k, x)
 */
export function forEach<K, V>(x: Entries<K, V>, fp: ProcessFunction<K, V>): void {
  for (var [k, v] of x)
    fp(v, k, x);
}


/**
 * Check if any value satisfies a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns true if ft(vᵢ) = true for some [kᵢ, vᵢ] ∈ x
 */
export function some<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): boolean {
  for (var [k, v] of x)
    if (ft(v, k, x)) return true;
  return false;
}


/**
 * Check if all values satisfy a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns true if ft(vᵢ) = true for every [kᵢ, vᵢ] ∈ x
 */
export function every<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): boolean {
  for (var [k, v] of x)
    if (!ft(v, k, x)) return false;
  return true;
}


/**
 * Transform values of entries.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns [k₀, fm(v₀)], [k₁, fm(v₁)], ... | [kᵢ, vᵢ] ∈ x
 */
export function* map<K, V, W=V>(x: Entries<K, V>, fm: MapFunction<K, V, V|W>): Entries<K, V|W> {
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
export function reduce<K, V, W=V>(x: Entries<K, V>, fr: ReduceFunction<K, V, V|W>, acc?: V|W): V|W {
  var init = arguments.length <= 2;
  for (var [k, v] of x) {
    if (init) { init = false; acc = v; }
    else acc = fr(acc, v, k, x);
  }
  return acc;
}


/**
 * Keep entries which pass a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns [k₀, v₀], [k₁, v₁], ... | ft(vᵢ) = true; [kᵢ, vᵢ] ∈ x
 */
export function* filter<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): Entries<K, V> {
  for (var [k, v] of x)
    if (ft(v, k, x)) yield [k, v];
}


/**
 * Keep entries with given keys.
 * @param x entries
 * @param ks keys
 * @returns [k₀, v₀], [k₁, v₁], ... | kᵢ ∈ ks; [kᵢ, vᵢ] ∈ x
 */
export function* filterAt<K, V>(x: Entries<K, V>, ks: K[]): Entries<K, V> {
  for (var [k, v] of x)
    if (ks.includes(k)) yield [k, v];
}


/**
 * Discard entries which pass a test.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns [k₀, v₀], [k₁, v₁], ... | ft(vᵢ) = false; [kᵢ, vᵢ] ∈ x
 */
export function* reject<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): Entries<K, V> {
  for (var [k, v] of x)
    if (!ft(v, k, x)) yield [k, v];
}


/**
 * Discard entries with given keys.
 * @param x entries
 * @param ks keys
 * @returns [k₀, v₀], [k₁, v₁], ... | kᵢ ∉ ks; [kᵢ, vᵢ] ∈ x
 */
export function* rejectAt<K, V>(x: Entries<K, V>, ks: K[]): Entries<K, V> {
  for (var [k, v] of x)
    if (!ks.includes(k)) yield [k, v];
}


/**
 * Flatten nested entries to given depth.
 * @param x nested entries
 * @param n maximum depth [-1 ⇒ all]
 * @param fm map function (v, k, x)
 * @param ft test function for flatten (v, k, x) [is]
 * @returns flat entries
 */
export function flat<K>(x: Entries<K, any>, n: number=-1, fm: MapFunction<K, any, any> | null=null, ft: TestFunction<K, any> | null=null): Entries<K, any> {
  return mapFlat(x as Map<K, any>, n, fm, ft || iterableIs);
}


/**
 * Flatten nested entries, based on map function.
 * @param x nested entries
 * @param fm map function (v, k, x)
 * @param ft test function for flatten (v, k, x) [is]
 * @returns flat entries
 */
export function flatMap<K>(x: Entries<K, any>, fm: MapFunction<K, any, any> | null=null, ft: TestFunction<K, any> | null=null): Entries<K, any> {
  var fm = fm || IDENTITY;
  var ft = ft || iterableIs;
  var a  = new Map();
  for (var [k, v] of x) {
    var v1 = fm(v, k, x);
    if (ft(v1, k, x)) mapConcat$(a, v1);
    else a.set(k, v1);
  }
  return a;
}


/**
 * Combine matching entries from all entries.
 * @param xs all entries
 * @param fm map function (vs, k)
 * @param ft end function (dones) [some]
 * @param vd default value
 * @returns fm([x₀[k₀], x₁[k₀], ...]), fm([x₀[k₁], x₁[k₁], ...]), ...
 */
export function zip<K, V, W=V>(xs: Entries<K, V>[], fm: MapFunction<K, V[], V[]|W> | null=null, ft: EndFunction=null, vd?: V): Entries<K, V[]|W> {
  return mapZip(xs.map(x => new Map(x)), fm, ft, vd);
}




// MANIPULATION
// ------------

/**
 * Segregate values by test result.
 * @param x entries
 * @param ft test function (v, k, x)
 * @returns [satisfies, doesnt]
 */
export function partition<K, V>(x: Entries<K, V>, ft: TestFunction<K, V>): [Entries<K, V>, Entries<K, V>] {
  var t = [], f = [];
  for (var [k, v] of x) {
    if (ft(v, k, x)) t.push([k, v]);
    else f.push([k, v]);
  }
  return [t, f];
}


/**
 * Segregate entries by similarity.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns Map \{key ⇒ entries\}
 */
export function partitionAs<K, V, W=V>(x: Entries<K, V>, fm: MapFunction<K, V, V|W>): Map<V|W, Entries<K, V>> {
  var fm = fm || IDENTITY;
  var a  = new Map();
  for (var [k, v] of x) {
    var v1 = fm(v, k, x);
    if (!a.has(v1)) a.set(v1, []);
    a.get(v1).push([k, v]);
  }
  return a;
}


/**
 * Break entries into chunks of given size.
 * @param x entries
 * @param n chunk size [1]
 * @param s chunk step [n]
 * @returns [x[0..n], x[s..s+n], x[2s..2s+n], ...]
 */
export function chunk<K, V>(x: Entries<K, V>, n: number=1, s: number=n): Entries<K, V>[] {
  return mapChunk(new Map(x), n, s);
}




// COMBINE
// -------

/**
 * Append entries from all entries, preferring last.
 * @param xs all entries
 * @returns x₀ ∪ x₁ ∪ ... | [x₀, x₁, ...] = xs
 */
export function concat<K, V>(...xs: Entries<K, V>[]): Entries<K, V> {
  return mapConcat(...xs);
}


/**
 * Join entries together into a string.
 * @param x entries
 * @param sep separator [,]
 * @param asc associator [=]
 * @returns "$\{k₀\}=$\{v₀\},$\{k₁\}=$\{v₁\}..." | [kᵢ, vᵢ] ∈ x
 */
export function join<K, V>(x: Entries<K, V>, sep: string=",", asc: string="="): string {
  var a = "";
  for (var [k, v] of x)
    a += k + asc + v + sep;
  return a.slice(0, -sep.length);
}




// SET OPERATIONS
// --------------

/**
 * Check if entries have no common keys.
 * @param x entries
 * @param y another entries
 * @returns x ∩ y = Φ?
 */
export function isDisjoint<K, V>(x: Entries<K, V>, y: Entries<K, V>): boolean {
  return mapIsDisjoint(new Map(x), y);
}


/**
 * Obtain keys present in any entries.
 * @param xs all entries
 * @returns \{k₀, k₁, ...\} | [kᵢ, vᵢ] ∈ x₀ ∪ x₁, ...; [x₀, x₁, ...] = xs
 */
export function unionKeys<K, V>(...xs: Entries<K, V>[]): Set<K> {
  return mapUnionKeys(...xs);
}


/**
 * Obtain entries present in any entries.
 * @param x entries
 * @param y another entries
 * @param fc combine function (a, b)
 * @returns x ∪ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x or [kᵢ, vᵢ] ∈ y\}
 */
export function union<K, V>(x: Entries<K, V>, y: Entries<K, V>, fc: CombineFunction<V> | null=null): Entries<K, V> {
  return mapUnion(x, y, fc);
}


/**
 * Obtain entries present in both entries.
 * @param x entries
 * @param y another entries
 * @param fc combine function (a, b)
 * @returns x ∩ y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x and [kᵢ, vᵢ] ∈ y\}
 */
export function intersection<K, V>(x: Entries<K, V>, y: Entries<K, V>, fc: CombineFunction<V> | null=null): Entries<K, V> {
  return mapIntersection(new Map(x), y, fc);
}


/**
 * Obtain entries not present in another entries.
 * @param x entries
 * @param y another entries
 * @returns x = x - y = \{[kᵢ, vᵢ] | [kᵢ, vᵢ] ∈ x, [kᵢ, *] ∉ y\}
 */
export function difference<K, V>(x: Entries<K, V>, y: Entries<K, V>): Entries<K, V> {
  return mapDifference(x, y);
}


/**
 * Obtain entries not present in both entries.
 * @param x entries
 * @param y another entries
 * @returns x = x-y ∪ y-x
 */
export function symmetricDifference<K, V>(x: Entries<K, V>, y: Entries<K, V>): Entries<K, V> {
  return mapSymmetricSifference(x, y);
}
