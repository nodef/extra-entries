import keys from './keys';
import type {Entries} from './_types';

/**
 * Gives keys present in any entries.
 * @param xs n entries
 */
function unionKeys<T, U>(...xs: Entries<T, U>[]): Set<T> {
  var a = new Set<T>();
  for(var x of xs) {
    for(var k of keys(x))
      a.add(k);
  }
  return a;
}
export default unionKeys;
