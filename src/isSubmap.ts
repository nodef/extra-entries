import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Checks if entries has a submap.
 * @param x entries
 * @param y submap?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isSubmap<T, U, V=U>(x: Entries<T, U>, y: Entries<T, U>, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var x1 = new Map(x);
  for(var [k, v] of y) {
    if(!x1.has(k)) return false;
    var u1 = fm(x1.get(k), k, x);
    var v1 = fm(v, k, y);
    if(fc(u1, v1)!==0) return false;
  }
  return true;
}
export default isSubmap;
// CYCLIC?
