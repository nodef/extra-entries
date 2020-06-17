import {join as mapJoin} from 'extra-map';
import type {Entries} from './_types';

/**
 * Joins entries together.
 * @param x entries
 * @param sep separator (,)
 * @param asc associator (=)
 */
function join<T, U>(x: Entries<T, U>, sep: string=',', asc: string='='): string {
  return mapJoin(x, sep, asc);
}
export default join;
