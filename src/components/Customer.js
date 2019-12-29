import React from 'react' //리엑트 라이브러리 불러오기

class Customer extends React.Component{ 
  render(){ //항상 수행되는 곳. 실젝로 그려지는 곳
    return( //출력된 내용을 return해줘야 함
        <div>
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
    )
  }
}

export default Customer; //customer 내보내기