import depthFirstSearch from './depthFirstSearch';
import breathFirstSearch from './breathFirstSearch';
import Stack from './stack';
import Node from './node';
import { NodeT, TrieT } from './types';
import Trie from './trie';

const trainingjs = {
  dfs: function (root: NodeT, searchValue: number): boolean {
    return depthFirstSearch(root, searchValue);
  },

  bfs: function (root: NodeT, searchValue: number): boolean {
    return breathFirstSearch(root, searchValue);
  },

  createStack: function () {
    return new Stack();
  },

  createNode: function (val: number): NodeT {
    return new Node(val);
  },

  createTrie: function (): TrieT {
    return new Trie();
  },
};

export default trainingjs;
