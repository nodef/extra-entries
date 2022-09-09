import {symmetricDifference as mapSymmetricSifference} from "extra-map";
import type {Entries} from "./_types";

/**
 * Gives entries not present in both entries.
 * @param x entries
 * @param y another entries
 */
function symmetricDifference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Entries<T, U> {
  return mapSymmetricSifference(x, y);
}
export default symmetricDifference;
