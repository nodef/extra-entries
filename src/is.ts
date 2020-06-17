import {is as iterableIs} from 'extra-iterable';

/**
 * Checks if value is entries.
 * @param v value
 */
function is(v: any): boolean {
  return iterableIs(v);
}
export default is;
