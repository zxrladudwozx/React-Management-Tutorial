import React, {Component} from 'react';
import './App.css';

import Customer from'./components/Customer'
import Paper from '@material-ui/core/Paper';  //컴포넌트 외부 감싸기
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  },
  progress:{
    margin:theme.spacing.unit*2
  }
})
/* React 라이브러리가 처음 컴포넌트를 실행할 때의 순서
  1) constructor()
  2) componentWillMount()
  3) render()
  4) componentDidMount()

  그 이후
  props or state가 변경되는 경우 => shouldComponentUpdate()
  
  React Component Life Cycle~
*/
class App extends Component{

  state={ //state는 컴포넌트 안에서 변경될 수 있는 데이터를 사용할 때 사용.
    customers:"",
    completed:0
  }

  componentDidMount(){  //api서버에 접근
    this.timer=setInterval(this.progress, 20);  //0.02초마다 시행되게끔 만듬
    //callApi부분 3줄을 주석 처리하면 프로그래스 바를 볼 수 있음.
    this.callApi()
    .then(res=>this.setState({customers:res}))  //상태가 변경됨.
    .catch(err=>console.log(err));
  }

  callApi=async()=>{
    const response = await fetch('/api/customers');
    const body= await response.json();
    return body;
  }

  progress=()=>{
    const {completed} = this.state;
    this.setState({completed:completed>=100?0:completed+1});  //0~100까지의 값을 왔다갔다 하게 됨.
  }

  render(){
    const {classes} = this.props; //props는 변경될 수 없는 데이터를 사용할 때 사용.
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
            this.state.customers ? this.state.customers.map(c=>{   //map = 각 원소에 어떤 요소를 적용하고 싶을 때 사용 c로 순회.
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
            }) ://비동기적 방식의 단점. 맨 처음에는 값이 없다고 나오니 그 값이 없다면 프로그래스 바 생김
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>

          } 
          </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default withStyles(styles)(App);
