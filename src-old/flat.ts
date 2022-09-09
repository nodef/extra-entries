import is from "./is";
import {flat as mapFlat} from "extra-map";
import type {mapFn, testFn, Entries} from "./_types";

/**
 * Flattens nested entries to given depth.
 * @param x nested entries
 * @param n maximum depth (-1 => all)
 * @param fm map function (v, k, x)
 * @param ft test function (v, k, x)
 */
function flat<T>(x: Entries<T, any>, n: number=-1, fm: mapFn<T, any, any>=null, ft: testFn<T, any>=null): Entries<T, any> {
  return mapFlat(x, n, fm, ft||is);
}
export default flat;
