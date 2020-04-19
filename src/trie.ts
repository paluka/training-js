import { NodeT } from './types';
import Node from './node';

export default function Trie() {
  this.root = new Node();
}

Trie.prototype.insert = function (word: string): void {
  let node: NodeT = this.root;

  for (const s of word) {
    if (!node.containsTrie(s)) {
      node.putTrie(s);
    }
    node = node.getTrie(s);
  }
  node.isEnd = true;
};

Trie.prototype.searchPrefix = function (prefix: string): NodeT {
  let node: NodeT = this.root;

  for (const s of prefix) {
    if (node.containsTrie(s)) {
      node = node.getTrie(s);
      console.log(s);
    } else {
      return null;
    }
  }

  return node;
};

Trie.prototype.search = function (word: string): boolean {
  const node: NodeT = this.searchPrefix(word);
  return !!(node && node.isEnd);
};

Trie.prototype.startsWith = function (prefix: string): boolean {
  const node: NodeT = this.searchPrefix(prefix);
  return !!node;
};
