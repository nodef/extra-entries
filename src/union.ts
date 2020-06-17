import {union as mapUnion} from 'extra-map';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in any entries.
 * @param x entries
 * @param y another entries
 * @param fn combine function (a, b)
 */
function union<T, U>(x: Entries<T, U>, y: Entries<T, U>, fn: combineFn<U>=null): Entries<T, U> {
  return mapUnion(x, y, fn);
}
export default union;
