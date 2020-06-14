import type {testFn, Entries} from './_types';

/**
 * Finds keys of entries passing a test.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function* searchAll<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): IterableIterator<T> {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) yield k;
}
export default searchAll;
