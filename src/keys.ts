import type {Entries} from './_types';

/**
 * Lists all keys.
 * @param x entries
 */
function* keys<T, U>(x: Entries<T, U>): Iterable<T> {
  for(var [k] of x)
    yield k;
}
export default keys;
