import type {Entries, Lists} from './_types';

/**
 * Creates entries from lists.
 * @param ls lists, i.e. [keys, values]
 */
function* fromLists<T, U>(ls: Lists<T, U>): Entries<T, U> {
  var [ks, vs] = ls, vi = vs[Symbol.iterator]();
  for(var k of ks) {
    var v = vi.next().value;
    yield [k, v];
  }
}
export default fromLists;
