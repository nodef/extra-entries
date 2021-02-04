import type {Entries} from "./_types";

/**
 * Gets entries without given keys.
 * @param x entries
 * @param ks keys
 */
function* rejectAt<T, U>(x: Entries<T, U>, ks: T[]): Entries<T, U> {
  for(var [k, v] of x)
    if(!ks.includes(k)) yield [k, v];
}
export default rejectAt;
