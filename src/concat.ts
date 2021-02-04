import {concat as mapConcat} from "extra-map";
import type {Entries} from "./_types";

/**
 * Appends entries from maps, preferring last.
 * @param xs n entries
 */
function concat<T, U>(...xs: Entries<T, U>[]): Entries<T, U> {
  return mapConcat(...xs);
}
export default concat;
