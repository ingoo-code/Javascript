/* 오버라이딩  */

class car {
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log('dirver..');
    }
    stop(){
        console.log('STOP..');
    }
}

class BMW extends car {
    constructor(color){
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}

// const z4 = new BMW('blue');