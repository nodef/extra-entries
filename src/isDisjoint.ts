import {isDisjoint as mapIsDisjoint} from "extra-map";
import type {Entries} from "./_types";

/**
 * Checks if entries have no common keys.
 * @param x entries
 * @param y another entries
 */
function isDisjoint<T, U>(x: Entries<T, U>, y: Entries<T, U>): boolean {
  return mapIsDisjoint(new Map(x), y);
}
export default isDisjoint;
