import type {Entries, mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x entries
 * @param fn map function (v, k, x)
 * @param ths this argument
 */
function* map<T, U, V=U>(x: Entries<T, U>, fn: mapFn<T, U, U|V>, ths: object=null): Entries<T, U|V> {
  for(var [k, v] of x)
    yield [k, fn.call(ths, v, k, x)];
}
export default map;
