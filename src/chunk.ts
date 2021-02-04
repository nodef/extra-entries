import {chunk as mapChunk} from "extra-map";
import type {Entries} from "./_types";

/**
 * Breaks entries into chunks of given size.
 * @param x entries
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk<T, U>(x: Entries<T, U>, n: number=1, s: number=n): Entries<T, U>[] {
  return mapChunk(new Map(x), n, s);
}
export default chunk;
