import {flat as mapFlat} from 'extra-map';
import type {Entries} from './_types';

/**
 * Flattens nested entries to given depth.
 * @param x nested entries
 * @param dep maximum depth (-1)
 */
function flat<T>(x: Entries<T, any>, dep: number=-1): Entries<T, any> {
  return mapFlat(x, dep);
}
export default flat;
