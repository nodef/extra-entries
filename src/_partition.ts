import type {testFn} from './_types';

/**
 * Segregates entries keeping similar values together.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition<K, V>(x: Iterable<[K, V]>, fn: testFn<K, V>, ths: object=null): [Array<[K, V]>, Array<[K, V]>] {
  var t: Array<[K, V]> = [];
  var f: Array<[K, V]> = [];
  for(var [k, v] of x) {
    if(fn.call(ths, v, k, x)) t.push([k, v]);
    else f.push([k, v]);
  }
  return [t, f];
}
export default partition;
