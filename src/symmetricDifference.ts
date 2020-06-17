import type {Entries} from './_types';

/**
 * Gives entries not present in both entries.
 * @param x entries
 * @param y another entries
 */
function symmetricDifference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Map<T, U> {
  var a = new Map(x);
  for(var [k, v] of y) {
    if(a.has(k)) a.delete(k);
    else a.set(k ,v);
  }
  return a;
}
export default symmetricDifference;
