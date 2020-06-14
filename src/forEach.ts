import type {calledFn, Entries} from './_types';

/**
 * Calls a function for each entry.
 * @param x entries
 * @param fn called function (v, k, x)
 * @param ths this argument
 */
function forEach<T, U>(x: Entries<T, U>, fn: calledFn<T, U>, ths: object=null): void {
  for(var [k, v] of x)
    fn.call(ths, v, k, x);
}
export default forEach;
