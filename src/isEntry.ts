import id from './_id';
import cmp from './_cmp';
import get from './get';
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
  var [k, v] = e, u = get(x, k);
  var u1 = fm(u, k, x);
  var v1 = fm(v, k, x);
  return fc(u1, v1)===0;
}
export default isEntry;
