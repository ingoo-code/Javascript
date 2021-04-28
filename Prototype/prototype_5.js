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
