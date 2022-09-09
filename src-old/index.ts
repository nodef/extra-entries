import {
  IDENTITY,
  COMPARE,
} from "extra-function";
import {is}      from "extra-iterable";
import {concat$} from "extra-map";




// TYPES
// =====

/** Entries is a list of key-value pairs, with unique keys. */
export type Entries<K, T> = Iterable<[K, T]>;


/** Lists is a pair of key list and value list, with unique keys. */
export type Lists<K, T> = [Iterable<K>, Iterable<T>];


/**
 * Handle reading of a single value.
 * @returns value
 */
export type ReadFunction<T> = () => T;


/**
 * Handle combining of two values.
 * @param a a value
 * @param b another value
 * @returns combined value
 */
export type CombineFunction<T> = (a: T, b: T) => T;


/**
 * Handle comparison of two values.
 * @param a a value
 * @param b another value
 * @returns a<b: -ve, a=b: 0, a>b: +ve
 */
export type CompareFunction<T> = (a: T, b: T) => number;


/**
 * Handle processing of values in entries.
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 */
export type ProcessFunction<K, T> = (v: T, k: K, x: Entries<K, T>) => void;


/**
 * Handle selection of values in entries.
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 * @returns selected?
 */
export type TestFunction<K, T> = (v: T, k: K, x: Entries<K, T>) => boolean;


/**
 * Handle transformation of a value to another.
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 * @returns transformed value
 */
export type MapFunction<K, T, U> = (v: T, k: K, x: Entries<K, T>) => U;


/**
 * Handle reduction of multiple values into a single value.
 * @param acc accumulator (temporary result)
 * @param v value in entries
 * @param k key of value in entries
 * @param x entries containing the value
 * @returns reduced value
 */
export type ReduceFunction<K, T, U> = (acc: U, v: T, k: K, x: Entries<K, T>) => U;


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
export function* keys<K, T>(x: Entries<K, T>): Iterable<K> {
  for (var [k] of x)
    yield k;
}


/**
 * List all values.
 * @param x entries
 * @returns v₀, v₁, ... | [kᵢ, vᵢ] ∈ x
 */
export function* values<K, T>(x: Entries<K, T>): Iterable<T> {
  for (var [, v] of x)
    yield v;
}




// GENERATE
// --------

/**
 * Convert lists to entries.
 * @param ls lists, i.e. [keys, values]
 * @returns ls as entries
 */
export function* fromLists<K, T>(ls: Lists<K, T>): Entries<K, T> {
  var [ks, vs] = ls;
  var iv = vs[Symbol.iterator]();
  for (var k of ks)
    yield [k, iv.next().value];
}




// SIZE
// ----

export {isEmpty} from "extra-iterable";
export {length}  from "extra-iterable";
export {length as size} from "extra-iterable";




// COMPARE
// -------

// export {default as compare} from "./compare";
// export {default as isEqual} from "./isEqual";




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


// export {default as swap} from "./swap";


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

export {default as count} from "./count";
export {default as countAs} from "./countAs";
export {default as min} from "./min";
export {default as max} from "./max";
export {default as range} from "./range";




// PART
// ----

// export {default as head} from "./head";
// export {default as tail} from "./tail";
export {default as take} from "./take";
export {default as drop} from "./drop";




// RANDOM PART
// -----------

export {default as key} from "./key";
export {default as value} from "./value";
export {default as entry} from "./entry";
export {default as subset} from "./subset";
export {default as subsets} from "./subsets";




// FIND
// ----

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


export {default as findAll} from "./findAll";
export {default as scanWhile} from "./scanWhile";
export {default as scanUntil} from "./scanUntil";
export {default as search} from "./search";
export {default as searchAll} from "./searchAll";
export {default as searchValue} from "./searchValue";
export {default as searchValueAll} from "./searchValueAll";

export {default as hasValue} from "./hasValue";
export {default as hasEntry} from "./hasEntry";
export {default as hasSubset} from "./hasSubset";




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


export {default as some} from "./some";
export {default as every} from "./every";


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


export {default as flat} from "./flat";


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


export {default as zip} from "./zip";




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


export {default as chunk} from "./chunk";




// COMBINE
// -------

export {concat} from "extra-map";


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

export {default as isDisjoint} from "./isDisjoint";
export {default as unionKeys} from "./unionKeys";
export {default as union} from "./union";
export {default as intersection} from "./intersection";
export {default as difference} from "./difference";
