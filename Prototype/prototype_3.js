/* prototype Link 통한 상속 개념만들기  */

let a = { num1:1 }
let b = { num2:2 }

b.__proto__ = a;
console.log(b.num1); // b 객체에서 a객체 안에있는 num1 사용함.



a.num1 = '5'; //a객체에서 num1을 수정함
console.log(b.num1);

delete a.num1;
console.log(a);

