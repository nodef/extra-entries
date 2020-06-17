import {flatMap as mapFlatMap} from 'extra-map';
import type {mapFn, Entries} from './_types';

/**
 * Flattens nested entries, using map function.
 * @param x nested entries
 * @param fn map function (v, k, x)
 */
function flatMap<T>(x: Entries<T, any>, fn: mapFn<T, any, any>=null): Entries<T, any> {
  return mapFlatMap(x, fn);
}
export default flatMap;
