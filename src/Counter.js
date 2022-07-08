import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  /*
        여기서 주의 할점! 
        state 값을 바로 바꾸면 안된다! 
        리액트가 업데이트가 됐는지 안됐는지 모르기때문에 
        state대신에 setstate에 변화를 적어야한다
    */
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);

    /*
   constructor은 컴포넌트가 만들어 질때마다 자동으로 호출되는 함수고
   Component가 가지고 있는 생성자를 가져오는 것은 'super(props)' 라는 코드로 가져옴
   Component가 extends 되어 있어있기때문에 Component에서 생성자를 가져올수있음
   아래에 this.handleIncrease = this.handleIncrease.bind(this); 
   this가 무엇인지 명시해 줌으로써 
   밖에서 화살표함수가 아닌 그냥 함수로 적어도 this를 자동으로 인식하게 해줌

   여기서 bind() 메서드의 역할은 
   : 메소드가 호출되면 새로운 함수를 생성함
   변수할당후 재호출을 할때  setTimeout등과 응용할때... 등 쓴다고 함
   
   */
  }

  //화살표 함수 대신 그냥 function 함수를 썼다면 this가 인식이 안됨!
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
      color: 'blue',
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
      color: 'red',
    });
  };
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number} </div>
        {/* 버튼 클릭 이벤트는 onClick = {this.함수명} 이다 */}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
/*
//functional Component -> 최신 문법으로 바꿔보았다

function Counter() {
    return(
        <div>
            <h1>카운터</h1>
            <div>값: 0 </div>
            <button>+</button>
            <button>-</button>
        </div> 
    )
  }
*/

export default Counter;

/*
  정리: state는 내부에서 변경할수있다. 
  변경할때는 언제나 setState 라는 함수를 사용한다.

  props는 부모에서 자식으로 물려줄때 사용, 읽기전용
  state는 자기자신의 값으로 가진다는것 값을 변경할수있다는것
*/
