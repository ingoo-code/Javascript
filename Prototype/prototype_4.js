//상속과 프로토타입 

user = {
    name:"ingoo"
}

user.name; // ingoo

user.hasOwnProperty('name'); // ture
user.hasOwnProperty('age'); // false

/*
    hasOwnProperty 는 어떻게 동작할까요?
    console 창에서
    user 만 쳐서 확인.
*/

user = {
    name:"ingoo",
    hasOwnProperty: function(){
        console.log('aaa');
    }
}
