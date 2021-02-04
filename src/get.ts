import type {Entries} from "./_types";

/**
 * Gets value at key.
 * @param x entries
 * @param k key
 */
function get<T, U>(x: Entries<T, U>, k: T): U {
  for(var [j, u] of x)
    if(k===j) return u;
}
export default get;
