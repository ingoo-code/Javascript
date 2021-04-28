/* Class 사용방법 */

console.log('Hello class');

const User = function (name,age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        cosnoel.log(this.name);
    };
};

const gildong = new User('길동',20);

//ES6에 추가댐

class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const dogoo = new User2('dogoo', 19);

/*
    User 와 User2와 똑같이 만들려면
    const User = function(name,age){
        this.name = name;
        this.age = age;
    }

    User.prototype.showName = function() {
        console.log(this.name);
    }
*/