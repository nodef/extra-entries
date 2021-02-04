import {zip as mapZip} from "extra-map";
import type {mapFn, tillFn, Entries} from "./_types";

/**
 * Combines matching entries from all entries.
 * @param xs n entries
 * @param fm map function (vs, k)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function zip<T, U, V=U>(xs: Entries<T, U>[], fm: mapFn<T, U[], U[]|V>=null, ft: tillFn=null, vd?: U): Entries<T, U[]|V> {
  return mapZip(xs.map(x => new Map(x)), fm, ft, vd);
}
export default zip;
