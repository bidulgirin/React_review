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
   constructor은 컴포넌트가 만들어 질때마다 자동으로 실행되는 함수고 
   super은 생성자함수로 Component가 extends 되어 있어있기때문에 
   this가 무엇인지 명시해 줌으로써 
   밖에서 화살표함수가 아닌 그냥 함수로 적어도 this를 자동으로 인식하게 해줌
   
   */
  }

  handleIncrease = () => {
    //화살표 함수 대신 그냥 function 함수를 썼다면 this가 인식이 안됨!
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
