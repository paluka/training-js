import { NodeT } from './types';

export default function breathFirstSearch(
  root: NodeT,
  searchValue: number,
): boolean {
  const queue: Array<NodeT> = [];
  queue.push(root);

  while (queue.length) {
    const node: NodeT = queue.shift();
    node.seen = true;
    console.log(node.val);

    if (node.val === searchValue) {
      return true;
    }

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return false;
}
