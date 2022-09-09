import {union as mapUnion} from "extra-map";
import type {combineFn, Entries} from "./_types";

/**
 * Gives entries present in any entries.
 * @param x entries
 * @param y another entries
 * @param fc combine function (a, b)
 */
function union<T, U>(x: Entries<T, U>, y: Entries<T, U>, fc: combineFn<U>=null): Entries<T, U> {
  return mapUnion(x, y, fc);
}
export default union;
