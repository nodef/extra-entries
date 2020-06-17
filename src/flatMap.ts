import is from './is';
import {flatMap as mapFlatMap} from 'extra-map';
import type {mapFn, testFn, Entries} from './_types';

/**
 * Flattens nested entries, using map function.
 * @param x nested entries
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flatMap<T>(x: Entries<T, any>, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Entries<T, any> {
  return mapFlatMap(x, fm, ft||is);
}
export default flatMap;
