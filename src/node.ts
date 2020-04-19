import { NodeT } from './types';

export default function Node(val?: number): void {
  this.val = val;
  this.seen = false;
  this.next = null;
  this.prev = null;
  this.left = null;
  this.right = null;

  this.isEnd = false;
  this.links = [];
}

Node.prototype.getTrie = function (charKey: string): NodeT {
  const searchKeyCode: number = charKey.charCodeAt(0);
  const aCode: number = 'a'.charCodeAt(0);
  console;
  const node: NodeT = this.links[searchKeyCode - aCode];
  return node;
};

Node.prototype.containsTrie = function (charKey: string): boolean {
  return !!this.getTrie(charKey);
};

Node.prototype.putTrie = function (charKey: string): void {
  const searchKeyCode: number = charKey.charCodeAt(0);
  const aCode: number = 'a'.charCodeAt(0);
  this.links[searchKeyCode - aCode] = new Node();
};
