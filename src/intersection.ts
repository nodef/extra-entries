import {intersection as mapIntersection} from 'extra-map';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in both entries.
 * @param x entries
 * @param y another entries
 * @param fc combine function (a, b)
 */
function intersection<T, U>(x: Entries<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Entries<T, U> {
  return mapIntersection(new Map(x), y, fc);
}
export default intersection;
