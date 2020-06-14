import type {Entries} from './_types';

/**
 * Removes first n entries.
 * @param x entries
 * @param n number of entries (1)
 */
function* drop<T, U>(x: Entries<T, U>, n: number=1): Entries<T, U> {
  var i = 0;
  for(var [k, v] of x)
    if(i++>=n) yield [k, v];
}
export default drop;
