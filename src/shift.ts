import drop from './drop';
import type {Entries} from './_types';

/**
 * Removes first entry.
 * @param x entries
 */
function* shift<T, U>(x: Entries<T, U>): Entries<T, U> {
  yield* drop(x, 1);
}
export default shift;
