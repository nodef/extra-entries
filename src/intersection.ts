import {intersection as mapIntersection} from 'extra-map';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in both entries.
 * @param x entries
 * @param y another entries
 * @param fn combine function (a, b)
 */
function intersection<T, U>(x: Entries<T, U>, y: Entries<T, U>, fn: combineFn<U>=null): Entries<T, U> {
  return mapIntersection(new Map(x), y, fn);
}
export default intersection;
