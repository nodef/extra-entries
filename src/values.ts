import type {Entries} from './_types';

/**
 * Lists all values.
 * @param x entries
 */
function* values<T, U>(x: Entries<T, U>): Iterable<U> {
  for(var [,v] of x)
    yield v;
}
export default values;
