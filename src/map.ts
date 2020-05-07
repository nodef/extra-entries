import type {mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x entries
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function* map<K, V, W>(x: Iterable<[K, V]>, fn: mapFn<K, V, W>, ths: object=null): IterableIterator<[K, V]> {
  for(var [k, v] of x)
    yield [k, fn.call(ths, v, k, x)];
}
export default map;
