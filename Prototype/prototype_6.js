/*
function Car(color){
    this.color = color;
    this.wheels = 4;
}

Car.prototype.driver = function(){
    console.log('drive');
}

Car.prototype.stop = function(){
    console.log('stop');
}

function avante(){
    this.showName = function(){
        console.log('아반떼');
    }
}

const 아반떼 = new Car('blue');
아반떼.__proto__ = new avante();
*/
 



function option(){
    this.driver = function(){
        console.log('drive');
    }

    this.stop = function(){
        console.log('stop');
    }
}

function avante(color){
    this.color = color;
    this.wheels = 4;
}

avante.prototype.showName = function(){
    console.log('test');
}

avante.prototype.__proto__ = new option();
 
let t = new avante('blue');



/*
function car10(color){
    this.color = color;
    this.wheels = 4;   
}

car10.prototype.drive = function(){
    console.log('drive');
}
car10.prototype.stop = function(){
    console.log('stop');
}

let avante10 = new car10('blue')

console.log("10",avante10);
avante10.drive();
avante10.stop();


// avante10.drive10();
// avante10.drive();



// //////////////__proto__----------------------------


function car20(color){
    this.color=color;
    this.wheels=4;
}

let drive = {
    drive:function (){
        console.log('drive');
    }
}


let 아반떼20 = new car20('blue');
아반떼20.__proto__ = drive;
아반떼20.drive();


let showName = {
    showName:function(){
        console.log('아반떼20')
    }
}
아반떼20.__proto__ = showName;
아반떼20.showName();


*/