import {forEach as mapForEach} from 'extra-map';
import type {calledFn, Entries} from './_types';

/**
 * Calls a function for each value.
 * @param x entries
 * @param fc called function (v, k, x)
 */
function forEach<T, U>(x: Entries<T, U>, fc: calledFn<T, U>): void {
  mapForEach(x, fc);
}
export default forEach;
