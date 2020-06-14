import keys from './keys';
import {value} from 'extra-array';
import type {Entries} from './_types';

/**
 * Picks an arbitrary key.
 * @param x entries
 * @param r random seed 0->1
 */
function key<T, U>(x: Entries<T, U>, r: number=Math.random()): T {
  return value([...keys(x)], r);
}
export default key;
