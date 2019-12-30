import React, {Component} from 'react';
import './App.css';

import Customer from'./components/Customer'
import Paper from '@material-ui/core/Paper';  //컴포넌트 외부 감싸기
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
//머테리얼 ui 는 react에서 강하다.

const styles = theme =>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit*3, //3의 가중치만큼 여백주기
    overflowX:"auto"  //전체 바깥쪽의 x축으로 오버플로우 시키겠다(scroll bar)
  },
  table:{
    minWidth:1080
  }
})

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
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default withStyles(styles)(App);
