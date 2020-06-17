import {take as iterableTake} from 'extra-iterable';
import type {Entries} from './_types';

/**
 * Keeps first n entries only.
 * @param x entries
 * @param n number of entries (1)
 */
function* take<T, U>(x: Entries<T, U>, n: number=1): Entries<T, U> {
  yield* iterableTake(x, n);
}
export default take;
