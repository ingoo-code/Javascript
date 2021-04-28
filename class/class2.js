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
}

const z5 = new Bmw('blue');