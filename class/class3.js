/* 매서드 오버라이딩 */

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    driver(){
        console.log('driver..');
    }
    stop(){
        console.log('STOP..');
    }
}

class Bmw extends Car {
    park(){
        console.log('Park');
    }
    stop(){
        super.stop();
        console.log('OFF');
    }
}

const z5 = new Bmw('blue');