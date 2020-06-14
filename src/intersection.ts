import id from './_id';
import type {combineFn, Entries} from './_types';

/**
 * Gives entries present in both entries.
 * @param x entries
 * @param y another entries
 * @param fn combine function (a, b)
 */
function* intersection<T, U>(x: Entries<T, U>, y: Entries<T, U>, fn: combineFn<U>=null): Entries<T, U> {
  var fn = fn||id;
  var y1 = new Map(y);
  for(var [j, u] of x) {
    if(!y1.has(j)) continue;
    yield [j, fn(u, y1.get(j))];
  }
}
export default intersection;
