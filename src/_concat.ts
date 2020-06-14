import type {Entries} from './_types';

/**
 * Combines multiple entries, preferring last.
 * @param x entries
 * @param ys other entries
 */
function* concat<T, U>(...xs: Entries<T, U>[]): Entries<T, U> {
  for(var y of ys) {
    for(var [k, v] of y)
      x.set(k, v);
  }
  return x;
}
export default concat;
