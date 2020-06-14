import values from './values';
import {value as arrayValue} from 'extra-array';
import type {Entries} from './_types';

/**
 * Picks an arbitrary value.
 * @param x entries
 * @param r random seed 0->1
 */
function value<T, U>(x: Entries<T, U>, r: number=Math.random()): U {
  return arrayValue([...values(x)], r);
}
export default value;
