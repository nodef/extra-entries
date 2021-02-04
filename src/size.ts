import {size as iterableSize} from "extra-iterable";
import type {Entries} from "./_types";

/**
 * Gets size of entries.
 * @param x entries
 */
function size<T, U>(x: Entries<T, U>): number {
  return iterableSize(x);
}
export default size;
