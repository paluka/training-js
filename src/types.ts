export interface NodeT {
  val: number;
  seen: boolean;
  prev: NodeT;
  next: NodeT;
  left: NodeT;
  right: NodeT;
  isEnd: boolean;
  links: Array<NodeT>;
  getTrie(charKey: string): NodeT;
  containsTrie(charKey: string): boolean;
  putTrie(charKey: string): void;
}

export interface TrieT {
  root: NodeT;
  insert(word: string): void;
  searchPrefix(prefix: string): NodeT;
  search(word: string): boolean;
  startsWidth(prefix: string): boolean;
}
