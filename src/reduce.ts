import {reduce as mapReduce} from 'extra-map';
import type {reduceFn, Entries} from './_types';

/**
 * Reduces values to a single value.
 * @param x entries
 * @param fn reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V=U>(x: Entries<T, U>, fn: reduceFn<T, U, U|V>, acc?: U|V): U|V {
  var A = arguments.length;
  return A>2? mapReduce(x, fn, acc) : mapReduce(x, fn);
}
export default reduce;
