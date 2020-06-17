import filterAt from './filterAt';
import {subsequences} from 'extra-array';
import type {Entries} from './_types';

/**
 * Lists all possible submaps.
 * @param x a map
 * @param n number of entries (-1 => any)
 */
function* submaps<T, U>(x: Entries<T, U>, n: number=-1): IterableIterator<Map<T, U>> {
  for(var ks of subsequences([...x.keys()], n))
    yield filterAt(x, ks);
}
export default submaps;
