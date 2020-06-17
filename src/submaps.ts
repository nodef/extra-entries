import {submaps as mapSubmaps} from 'extra-map';
import type {Entries} from './_types';

/**
 * Lists all possible submaps.
 * @param x a map
 * @param n number of entries (-1 => any)
 */
function* submaps<T, U>(x: Entries<T, U>, n: number=-1): Iterable<Entries<T, U>> {
  yield* mapSubmaps(new Map(x), n);
}
export default submaps;
