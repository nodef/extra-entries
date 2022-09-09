import {countAs as mapCountAs} from "extra-map";
import type {mapFn, Entries} from "./_types";

/**
 * Counts occurrences of values.
 * @param x entries
 * @param fm map function (v, k, x)
 * @returns Map {value => count}
 */
function countAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, number> {
  return mapCountAs(x, fm);
}
export default countAs;
