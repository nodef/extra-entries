import type {Entries} from './_types';

/**
 * Gets value at key.
 * @param x entries
 * @param k key
 */
function get<T, U>(x: Entries<T, U>, k: T): U {
  for(var [j, v] of x)
    if(k===j) return v;
}
export default get;
