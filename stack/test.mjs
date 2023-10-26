import { Stack } from "Stack";

let stack = new Stack();

console.log("출력 전");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
