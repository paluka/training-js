import { NodeT } from './types';

export default function depthFirstSearch(
  node: NodeT,
  searchValue: number,
): boolean {
  if (!node) {
    return false;
  }
  node.seen = true;
  console.log(node.val);

  if (node.val === searchValue) {
    return true;
  }

  const leftFlag = depthFirstSearch(node.left, searchValue);

  if (leftFlag) {
    return true;
  }

  const rightFlag = depthFirstSearch(node.right, searchValue);

  if (rightFlag) {
    return true;
  }

  return false;
}
