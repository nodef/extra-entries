import {unionKeys as mapUnionKeys} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gives keys present in any entries.
 * @param xs n entries
 */
function unionKeys<T, U>(...xs: Entries<T, U>[]): Set<T> {
  return mapUnionKeys(...xs);
}
export default unionKeys;
