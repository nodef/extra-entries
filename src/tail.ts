import drop from './drop';
import type {Entries} from './_types';

/**
 * Gets entries without the first entry.
 * @param x entries
 */
function* tail<T, U>(x: Entries<T, U>): Entries<T, U> {
  return drop(x, 1);
}
export default tail;
