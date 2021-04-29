/*
    async 사용하면 Promise 객체로 반환해준다.
    그리고 함수에서만 사용이 가능합니다.
*/
/*
async function 자동차(){
    return "아반떼";
}

console.log(자동차());

자동차().then(result => {
    console.log(result);
})
*/

/*
async function 자동차(name){
    return name;
}

자동차('아반떼').then(result => console.log(result))
*/

/*
async function 자동차(name){
    return Promise.resolve(name);
    //throw new Error("err..."); //throw문은 함수를 끝낸다 내용이다 대신 값을 던지고 끝내줌.
}

자동차('아반떼')
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()=>{ console.log('end'); })
*/

/*
    await 
    await 키워드는 async 선언한 함수 안에서만 사용이 가능합니다.
*/

/*
function 자동차(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name);
        },1000)
    });
}

async function 자동차리스트(){
    const result = await 자동차('아반떼')
    console.log(result);
}

console.log('start');
자동차리스트();
*/

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
            //reject(new Error('error...'));
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

async function 자동차리스트() {
    console.log('시작');
    try{
        const result1 = await 아반떼();
        console.log(result1);
        const result2 = await 소나타();
        console.log(result2);
        const result3 = await 그랜저();
        console.log(result3);
    }catch (e){
        console.log(e);
    }

    console.log('종료');
}

자동차리스트();
