import getPath from './getPath';
import type {Entries} from './_types';

/**
 * Checks if nested entries has a path.
 * @param x nested entries
 * @param p path
 */
function hasPath<T>(x: Entries<T, any>, p: T[]): boolean {
  return getPath(x, p)!==undefined;
}
export default hasPath;
