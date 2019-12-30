import React from 'react' //리엑트 라이브러리 불러오기

class Customer extends React.Component{ 
  render(){ //항상 수행되는 곳. 실제로 그려지는 곳
    return( //출력된 내용을 return해줘야 함
        //jsx 문법 중 하나.(DIV) 내부 데이터가 두개 이상인 경우에 div같은 것으로 꼭 감싸야함.
        <div>  
            <CustomerProfile
                id={this.props.id}
                image={this.props.image}
                name={this.props.name}  
            />

            <CustomerInfo
                birthday={this.props.birthday}
                gender={this.props.gender}
                job={this.props.job}
            />
        </div>
    )
  }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} art="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer; //customer 내보내기