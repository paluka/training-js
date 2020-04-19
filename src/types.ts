export interface NodeT {
  val: number;
  seen: boolean;
  prev: NodeT;
  next: NodeT;
  left: NodeT;
  right: NodeT;
}
