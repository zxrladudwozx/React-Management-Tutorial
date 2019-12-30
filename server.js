//npm install -g react-scripts
//npm install -g concurrently

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/api/hello', (req, res)=>{
//     res.send({message:'hello ex!'});
// })

app.get('api/customers', (req, res)=>{
    res.send([{
        'id':1,
        'image':'http://placeimg.com/64/64/1',
        'name':'김영재',
        'birthday':'970513',
        'gender':'남자',
        'job':'대학생'
      },{
        'id':2,
        'image':'http://placeimg.com/64/64/2',
        'name':'홍길동',
        'birthday':'1234',
        'gender':'남자',
        'job':'직장인'
      },{
        'id':3,
        'image':'http://placeimg.com/64/64/3',
        'name':'긱긱기',
        'birthday':'4212',
        'gender':'여자',
        'job':'디자이너'
      }]);
})
app.listen(port, ()=>console.log(`Listening on port ${port}`));