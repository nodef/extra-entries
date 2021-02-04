import type {Entries} from "./_types";

/**
 * Checks if entries is empty.
 * @param x entries
 */
function isEmpty<T, U>(x: Entries<T, U>): boolean {
  for(var _ of x)
    return false;
  return true;
}
export default isEmpty;
