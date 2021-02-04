import size from "./size";
import type {Entries} from "./_types";

/**
 * Gets size of entries.
 * @param x entries
 */
function length<T, U>(x: Entries<T, U>): number {
  return size(x);
}
export default length;
