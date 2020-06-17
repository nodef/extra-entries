import {cartesianProduct as mapCartesianProduct} from 'extra-map';
import type {mapFn, Entries} from './_types';

/**
 * Lists cartesian product of maps.
 * @param xs maps
 * @param fn map function (vs, i)
 */
function cartesianProduct<T, U, V=U>(xs: Entries<T, U>[], fn: mapFn<number, Map<T, U>, Map<T, U>|V>=null): Iterable<Entries<T, U>|V> {
  return mapCartesianProduct(xs.map(x => new Map(x)), fn);
}
export default cartesianProduct;
