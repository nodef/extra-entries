import type {testFn, Entries} from './_types';

/**
 * Keeps entries which pass the test.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function* filter<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): Entries<T, U> {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) yield [k, v];
}
export default filter;
