import type {Entries} from './_types';

/**
 * Keeps first n entries only.
 * @param x entries
 * @param n number of entries (1)
 */
function* take<T, U>(x: Entries<T, U>, n: number=1): Entries<T, U> {
  var i = 0;
  for(var [k, v] of x) {
    if(i++>=n) break;
    yield [k, v];
  }
}
export default take;
