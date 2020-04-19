export default function Node(val: number): void {
  this.val = val;
  this.seen = false;
  this.next = null;
  this.prev = null;
  this.left = null;
  this.right = null;
}
