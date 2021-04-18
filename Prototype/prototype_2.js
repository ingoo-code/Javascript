console.log('프로토타입 상속(prototypal inheritance) 이라는 확장과 객체의 재사용을 가능하게 \n 해주며 class 기반으로 인스턴스를 생성하지 않는 \n 자바스크립트에서 객체지향적인 개발 개념을 가질수 있게 해주는 Prototype에 대한 내용이다.'); // Node prototype

//example 1
/*
    foo = {name : "foo"}; 
    foo.prototype.a='hello world';
    console.log(foo.a);


    이것이 실행이안되는 이유를 설명할줄알아야 한다.

    간단한 것은 foo에는 constructor 이 없기떄문이다.
    즉 생성하지 못하였기 때문이다. 이와 비슷하게 작동되게 할려면. 아래와같은 코드로 작성하면 된다.
*/

function foo(){}
foo.prototype.a = 'Hello world';
let obj = new foo();

console.dir(obj.a);
console.dir(obj.constructor);
console.dir(foo);
console.dir(foo.prototype);
console.dir(obj.__proto__);

/* 다시한번 console.dir를 쳐보며 꼭 확인해보자.. */

