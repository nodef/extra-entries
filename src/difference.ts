import {difference as mapDifference} from 'extra-map';
import type {Entries} from './_types';

/**
 * Gives entries not present in another.
 * @param x entries
 * @param y another entries
 */
function difference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Entries<T, U> {
  return mapDifference(x, y);
}
export default difference;
