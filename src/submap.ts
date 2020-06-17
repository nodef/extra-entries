import {submap as mapSubmap} from 'extra-map';
import type {Entries} from './_types';

/**
 * Gives an arbitrary submap.
 * @param x entries
 * @param n number of entries (-1 => any)
 * @param r random seed 0->1
 */
function submap<T, U>(x: Entries<T, U>, n: number=-1, r: number=Math.random()): Entries<T, U> {
  return mapSubmap(new Map(x), n, r);
}
export default submap;
