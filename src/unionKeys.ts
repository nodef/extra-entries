import keys from './keys';
import {concat} from 'extra-set';
import type {Entries} from './_types';

/**
 * Gives keys present in any entries.
 * @param xs n entries
 */
function unionKeys<T, U>(...xs: Entries<T, U>[]): Set<T> {
  return concat(...xs.map(keys));
}
export default unionKeys;
