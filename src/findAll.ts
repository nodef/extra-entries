import type {testFn, Entries} from './_types';

/**
 * Finds values passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function* findAll<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): IterableIterator<U> {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) yield v;
}
export default findAll;
