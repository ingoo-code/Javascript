/*
const 아반떼 = {
    색상:'블루',
    휠:4,
    네비게이션:true,
    drive(){
        console.log('이동중..');
    }
}

const 소나타 = {
    색상:'레드',
    휠:4,
    네비게이션:false,
    drive(){
        console.log('이동중..');
    }
}

const 제네시스 = {
    색상:'검정',
    휠:4,
    네비게이션:true,
    drive(){
        console.log('이동중..');
    }
}
*/
/*

const 자동차 = {
    휠:4,
    drive(){
        console.log('이동중');
    }
}

const 아반떼 = {
    색상:'블루',
    네비게이션:true,
}

const 소나타 = {
    색상:'레드',
    네비게이션:false,
}

const 제네시스 = {
    색상:'검정',
    네비게이션:true,
}

const 브랜드 = {
    name:'현대',
}

아반떼.__proto__ = 자동차;
소나타.__proto__ = 자동차;
제네시스.__proto__ = 자동차;

브랜드.__proto__ = 아반떼;
브랜드.__proto__ = 소나타;
브랜드.__proto__ = 제네시스;
*/


const 현대 = function(color){
    this.color = color;
}

현대.prototype.wheels = 4;
현대.prototype.drive = function(){
    console.log('drive...');
}

const car1 = new 현대('blue');

/*
    생성자 를 사용해서 비슷한 객체를 많이만들수있죠.

    이후 휠즈랑
    드라이브는 동일하기때문에 분리해줄수있겠죠

    이후 객체.__proto__ = car; 넣어서 연결해서 사용
    하지만 항상 __proto__ 를 사용해서일일이 넣으면 귀찮겠죠 ?

    그래서 prototype.wheels ..
    prototype.drive ..를 넣어서 만들어봅시다.
*/