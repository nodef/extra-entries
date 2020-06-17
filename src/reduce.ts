import {reduce as mapReduce} from 'extra-map';
import type {reduceFn, Entries} from './_types';

/**
 * Reduces values to a single value.
 * @param x entries
 * @param fr reduce function (acc, v, k, x)
 * @param acc initial value
 */
function reduce<T, U, V=U>(x: Entries<T, U>, fr: reduceFn<T, U, U|V>, acc?: U|V): U|V {
  var A = arguments.length;
  return A>2? mapReduce(x, fr, acc) : mapReduce(x, fr);
}
export default reduce;
