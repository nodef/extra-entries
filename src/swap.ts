import {swap as mapSwap} from "extra-map";
import type {Entries} from "./_types";

/**
 * Exchanges two values.
 * @param x entries
 * @param k a key
 * @param l another key
 */
function swap<T, U>(x: Entries<T, U>, k: T, l: T): Entries<T, U> {
  return mapSwap(x, k, l);
}
export default swap;
