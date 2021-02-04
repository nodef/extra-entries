import {getAll as mapGetAll} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gets values at keys.
 * @param x entries
 * @param ks keys
 */
function getAll<T, U>(x: Entries<T, U>, ks: T[]): Iterable<U> {
  return mapGetAll(new Map(x), ks);
}
export default getAll;
