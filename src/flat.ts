import is from './is';
import {flat as mapFlat} from 'extra-map';
import type {testFn, Entries} from './_types';

/**
 * Flattens nested entries to given depth.
 * @param x nested entries
 * @param n maximum depth (-1 => all)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Entries<T, any>, n: number=-1, ft: testFn<T, any>=null): Entries<T, any> {
  return mapFlat(x, n, ft||is);
}
export default flat;
