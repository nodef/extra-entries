import type {testFn, Entries} from "./_types";

/**
 * Discards entries which pass a test.
 * @param x entries
 * @param ft test function (v, k, x)
 */
function* reject<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Entries<T, U> {
  for(var [k, v] of x)
    if(!ft(v, k, x)) yield [k, v];
}
export default reject;
