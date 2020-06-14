import type {Entries} from './_types';

/**
 * Sets value at key.
 * @param x entries
 * @param k key
 * @param v value
 */
function* set<T, U>(x: Entries<T, U>, k: T, v: U): Entries<T, U> {
  for(var [j, u] of x)
    yield j===k? [j, v] : [j, u];
}
export default set;
