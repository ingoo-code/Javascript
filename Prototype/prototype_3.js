/* prototype Link 통한 상속 개념만들기  */

let a = { num1:1 }
let b = { num2:2 }

b.__proto__ = a;
console.log(b.num1); // b 객체에서 a객체 안에있는 num1 사용함.



a.num1 = '5'; //a객체에서 num1을 수정함
console.log(b.num1);

delete a.num1;
console.log(a);

/*
    프로토타입 식별자 룩업
*/

a = {
    num1:1
}

b = {
    __proto__:a,
    num2:2
}

c = {
    __proto__:b,
    num3:3
}

console.log(c.num1);
