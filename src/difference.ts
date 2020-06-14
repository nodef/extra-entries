import type {Entries} from './_types';

/**
 * Gives entries not present in another.
 * @param x entries
 * @param y another entries
 */
function* difference<T, U>(x: Entries<T, U>, y: Entries<T, U>): Entries<T, U> {
  var y1 = new Map(y);
  for(var [k, v] of x)
    if(!y1.has(k)) yield [k, v];
}
export default difference;
