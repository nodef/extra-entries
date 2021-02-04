import {partitionAs as mapPartitionAs} from "extra-map";
import type {mapFn, Entries} from "./_types";

/**
 * Segregates values by similarity.
 * @param x entries
 * @param fm map function (v, k, x)
 */
function partitionAs<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Map<U|V, Entries<T, U>> {
  return mapPartitionAs(x, fm);
}
export default partitionAs;
