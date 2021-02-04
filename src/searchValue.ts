import {searchValue as mapSearchValue} from "extra-map";
import type {compareFn, mapFn, Entries} from "./_types";

/**
 * Finds key with given value.
 * @param x entries
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, k, x)
 */
function searchValue<T, U, V=U>(x: Entries<T, U>, v: U, fc: compareFn<U|V>=null, fm: mapFn<T, U, U|V>=null): T {
  return mapSearchValue(x, v, fc, fm);
}
export default searchValue;
