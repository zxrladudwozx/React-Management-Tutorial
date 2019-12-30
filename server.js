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

app.get('/api/customers', (req, res)=>{
    res.send([{
        'id':1,
        'image':'http://placeimg.com/64/64/1',
        'name':'Kim',
        'birthday':'970513',
        'gender':'남자',
        'job':'대학생'
      },{
        'id':2,
        'image':'http://placeimg.com/64/64/2',
        'name':'Young',
        'birthday':'050505',
        'gender':'남자',
        'job':'웹 개발자'
      },{
        'id':3,
        'image':'http://placeimg.com/64/64/3',
        'name':'Jae',
        'birthday':'979797',
        'gender':'여자',
        'job':'디자이너'
      }]);
})
app.listen(port, ()=>console.log(`Listening on port ${port}`));