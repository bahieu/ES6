let add = (x,y) => x+y;
console.log(add(5.10));
// Arrow function với 1 tham số
let showMessage = log => log;
console.log(showMessage('Message1'));
// Arrow function với forEach
var color = ['red','blue','yellow','green'];
color.forEach(value => console.log(value));
// Arrow function với nhiều tham số
var sum = (a,b,c) => a+b+c;
console.log(sum(5,10,15));
//Arrow function không tham số
var sum =()=> console.log('No param');
sum();
// Ngắt dòng giữa tham số và mũi tên
let multiply = (x,y) =>
x*y;
multiply();