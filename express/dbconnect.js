
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = process.env.port || 3000;

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true,
});


app.get('/',(req,res)=>{
    res.render('index.html',{
        name:'ingoo',
    });
})

app.listen(port,()=>{
    console.log(`server start port : ${port}`);
})
