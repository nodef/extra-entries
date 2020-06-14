import type {Entries} from './_types';

/**
 * Gets first entry.
 * @param x entries
 */
function head<T, U>(x: Entries<T, U>): [T, U] {
  for(var [k, v] of x)
    return [k, v];
}
export default head;
