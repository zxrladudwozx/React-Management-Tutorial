import React from 'react' //리엑트 라이브러리 불러오기
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{ 
  render(){ //항상 수행되는 곳. 실제로 그려지는 곳
    return( //출력된 내용을 return해줘야 함
        <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell><img src={this.props.image} alt='profile'/></TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell>{this.props.birthday}</TableCell>
            <TableCell>{this.props.gender}</TableCell>
            <TableCell>{this.props.job}</TableCell>
        </TableRow>
    )
  }
}
export default Customer; //customer 내보내기