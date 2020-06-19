import {subset as mapSubset} from 'extra-map';
import type {Entries} from './_types';

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
