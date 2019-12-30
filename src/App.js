import React, {Component} from 'react';
import './App.css';

import Customer from'./components/Customer'

const customers =[{
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
}]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
                key={c.id}  //map을 쓸 땐 key를 지정해줘야함.
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          }) //map = 각 원소에 어떤 요소를 적용하고 싶을 때 사용 c로 순회.
        }
      </div>
    )
  }
}
export default App;
