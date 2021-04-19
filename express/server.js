/*
    터미널 :
    npm init
    npm install --svae express 
    후 설치가 완료되었다면.

    root폴더 기준으로 node server.js 실행하고

    브라우저에서 localhost:3000쳐보기.
    이 짧은소스이고 간단한 기능이지만
    배워야할 내용은 너무나도 많다 .정확한 이해도가 생겨야 앞으로 처리를 어떻게하면 되는지 알게된다.

    
    1. const express = require('express');
    이구문을 알기위해서 NPM에 대해서 알고있어야하며, 
    이것이 어떻게 작동되는지 알아야 한다. 
    Node Package Manage 에 대해서 알아야합니다.

    2. app.get('/',(req,res)=>{ }) 이쪽부분도 
    get, post, update, delete 등등 웹페이지에 대한 네트워크 처리가 어떻게 되는지. 통신이란 무엇인지. 정확하게 알면 좋겠지만.
    그래도 개념에 대한 이해도는 어느정도 정확히 알고있어야합니다.
    구현을직접하진못해도. 어떻게 돌아가는지는 알아야합니다.


*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json({
        success:true,
    })
});

app.listen(port,()=>{
    console.log(`server is listening at localhost:${port}`);
});