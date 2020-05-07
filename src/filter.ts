import type {testFn} from './_types';

/**
 * Keeps pairs which pass a test.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function* filter<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): IterableIterator<[K, V]> {
  for(var [k, v] of x)
    if(fn.call(ths, v, k, x)) yield [k, v];
}
export default filter;
