import is from "./is";
import get from "./get";
import type {Entries} from "./_types";

/**
 * Gets value at path in nested entries.
 * @param x nested entries
 * @param p path
 */
function getPath<T>(x: Entries<T, any>, p: T[]): any {
  for(var k of p)
    x = is(x)? get(x, k) : undefined;
  return x;
}
export default getPath;
