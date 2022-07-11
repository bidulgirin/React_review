import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

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
  //추가하기 기능
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
          id: this.id++, // 아이디값이 0, 1, 2 ... 이런식으로 증가함
        }),
      ),
    });
  };

  // 삭제 기능
  handleRemove = (id) => {
    const { information } = this.state; // 비 구조 할당 this.state.information
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };
  //수정하기 기능
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };
  render() {
    //PhoneInfoList 에다가 data값으로 this.state에 있는 information을 전달해주는것이다.
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        {/* {JSON.stringify(this.state.information)} 
        메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다
        배열에 객체 값을 확인할때 쓰였음
        
        */}
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove} //PhoneInfoList에 onRemove라는 함수로 넘겨준다
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
