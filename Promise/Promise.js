/*
    try{

    } catch (err){

    }

*/

/*
    비동기에 대한 설명 
    상점비유 

    Promise 기본구조
                              성공      실패
    const pr = new Promise( (resolve, reject)=>{
        //code 
    }) //return 객체

    new Promise -> Object(객체 입니다.)

    state:pending(대기)
    result: undefined 
    ---- 완료가되면

    resolve(value) 가될때.
    state:fulfilled(이행됨)
    result:value

    reject(error)
    state:rejected(거부됨)
    result:error

*/

//성공을 가정한 코드
/*
const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('OK');
    },3000);
});
*/

//실패를 가정한 코드
/*
const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
            reject(new Error('error...'));
    },3000);
})
*/

/*
const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Ok');
        //reject(new Error("Error"));
    },3000)
});

console.log('Start');
pr.then( (result)=>{
    console.log(result);
}).catch( (error)=> {
    console.log(error);
}).finally(()=>{
    console.log('End');
}) 
*/

/*
    callback Hell

const 아반떼 = (a) =>{
    setTimeout(()=>{
        console.log('아반떼 go');
        a();
    },1000);
}

const 소나타 = (a) =>{
    setTimeout(()=>{
        console.log('소나타 go');
        a();
    },3000);
}

const 그랜저 = (a) =>{
    setTimeout(()=>{
        console.log('그랜저 go');
        a();
    },2000);
}

console.log('start');
아반떼(()=>{
    소나타(()=>{
        그랜저(()=>{
            console.log('end');
        })
    })
})
*/

/*
콜백함수의 기초
const 제네시스 = callback =>{
    setTimeout(()=>{
        console.log('제네시스');
        //console.log(callback);
        //console.log(callback());
    },1000);
}


function test(){
    return 'Hello world';
}


제네시스('test');
*/


//프로미스 체이닝
const 아반떼 = () => { 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('아반떼 go');
        },3000)
    })
}

const 소나타 = () => { 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('소나타 go');
        },2000)
    })
}

const 그랜저 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('그랜저 go');
        },1000)
    })
}

/*
console.time('x');
console.log('start');
아반떼().then((result)=> { 
    console.log(result);
    return 소나타() 
})
.then( (result)=> { 
    console.log(result);
    return 그랜저() 
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('end');
    console.timeEnd('x');
})
*/


/*
// Promise.all
console.time('x');
Promise.all([아반떼(),소나타(),그랜저()]).then((result)=> {
    console.log(result);
    console.timeEnd('x');
})
*/

