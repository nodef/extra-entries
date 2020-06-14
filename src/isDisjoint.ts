import type {Entries} from './_types';

/**
 * Checks if entries have no common keys.
 * @param x entries
 * @param y another entries
 */
function isDisjoint<T, U>(x: Entries<T, U>, y: Entries<T, U>): boolean {
  var ks = new Set();
  for(var [k] of x)
    ks.add(k);
  for(var [k] of y)
    if(ks.has(k)) return false;
  return true;
}
export default isDisjoint;
