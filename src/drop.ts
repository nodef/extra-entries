import {drop as iterableDrop} from 'extra-iterable';
import type {Entries} from './_types';

/**
 * Removes first n entries.
 * @param x entries
 * @param n number of entries (1)
 */
function* drop<T, U>(x: Entries<T, U>, n: number=1): Entries<T, U> {
  yield* iterableDrop(x, n);
}
export default drop;
