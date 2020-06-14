import type {Entries} from './_types';

/**
 * Deletes an entry.
 * @param x entries
 * @param k key
 */
function* remove<T, U>(x: Entries<T, U>, k: T): Entries<T, U> {
  for(var [j, u] of x)
    if(j!==k) yield [j, u];
}
export default remove;
