import { LinkedList } from "../linked_list/linkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }
  pop(data) {
    try {
      this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }
  peak() {
    return this.list.getNodeAt(0);
  }
  isEmpty() {
    return this.list.count == 0;
  }
}
