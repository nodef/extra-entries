import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn, Entries} from './_types';

/**
 * Checks if entries has an entry.
 * @param x entries
 * @param e entry?
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function isEntry<T, U, V=U>(x: Entries<T, U>, e: [T, U], fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var [k, v] = e, v1 = fm(v, k, null);
  for(var [j, u] of x) {
    if(j!==k) continue;
    var u1 = fm(u, j, x);
    return fc(u1, v1)===0;
  }
  return false;
}
export default isEntry;
