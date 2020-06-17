import id from './_id';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in any entries.
 * @param x entries
 * @param y another entries
 * @param fn combine function (a, b)
 */
function union<T, U>(x: Entries<T, U>, y: Entries<T, U>, fn: combineFn<U>=null): Entries<T, U> {
  var fn = fn||id;
  var a = new Map(x);
  for(var [k, v] of y) {
    if(!a.has(k)) a.set(k, v);
    else a.set(k, fn(a.get(k), v));
  }
  return a;
}
export default union;
