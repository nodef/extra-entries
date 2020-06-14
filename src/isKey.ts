import type {Entries} from './_types';

/**
 * Checks if entries has a key.
 * @param x entries
 * @param k key?
 */
function isKey<T, U>(x: Entries<T, U>, k: T): boolean {
  for(var [j, v] of x)
    if(j===k) return true;
  return false;
}
export default isKey;
