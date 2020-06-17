import type {Entries, mapFn} from './_types';

/**
 * Updates values based on map function.
 * @param x entries
 * @param fm map function (v, k, x)
 */
function* map<T, U, V=U>(x: Entries<T, U>, fm: mapFn<T, U, U|V>): Entries<T, U|V> {
  for(var [k, v] of x)
    yield [k, fm(v, k, x)];
}
export default map;
