import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  /*
    여기서 id값은 왜 state값에 안넣었냐면
    렌더링(화면에 출력) 하지 않을것이기 때문에
    굳이 state값으로 설정하지 않은것임

    state 와 setstate를 설정하는 이유는
    재랜더링을 하기위함이기때문이다.
  */
  id = 0;
  state = {
    information: [],
  };
  /*
    리액트에서는 불변성을 꼭 유지해야하기 때문에
    this.state.information.push(data) 이런식으로
    기존의 배열이나 객체를 바로 수정하면 안됨 
  
    concat이라는 메서드를 이용할것
    concat -> 새로운 배열을 생성하여 거기다가 병합시켜주는 
    배열 내장함수이기 때문에 ㅇㅋ
    값을 수정할때는 항상 setstate에다가 값을 입력할것
  */
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      //information: this.state.information.concat(data),
      // information: information.concat({
      //   ...data, // ...은 props들을 포장했다고 생각하면 됨
      //   id: this.id++,
      // }),
      information: information.concat(
        Object.assign({}, data, {
          /*Object.assign: 빈 객체 {} 에 data를 넣고 
          뒤에 있는 id 값도 넣어주겠다라는 의미*/
          id: this.id++,
        }),
      ),
    });
  };
  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
