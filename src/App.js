import React, {Component} from 'react';
import './App.css';

import Customer from'./components/Customer'

const customer ={//내용을 저장
  'name':'김영재',
  'birthday':'970513',
  'gender':'남자',
  'job':'대학생'
}

class App extends Component{
  render(){
    return(
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      
      />
    )
  }
}
export default App;
