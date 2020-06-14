import type {Entries} from './_types';

/**
 * Exchanges two values.
 * @param x entries
 * @param k a key
 * @param l another key
 */
function* swap<T, U>(x: Entries<T, U>, k: T, l: T): Entries<T, U> {
  var t = x.get(k);
  x.set(k, x.get(l));
  x.set(l, t);
  return x;
}
export default swap;