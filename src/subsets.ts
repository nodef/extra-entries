import {subsets as mapSubsets} from 'extra-map';
import type {Entries} from './_types';

/**
 * Lists all possible subsets.
 * @param x a map
 * @param n number of entries (-1 => any)
 */
function* subsets<T, U>(x: Entries<T, U>, n: number=-1): Iterable<Entries<T, U>> {
  yield* mapSubsets(new Map(x), n);
}
export default subsets;
