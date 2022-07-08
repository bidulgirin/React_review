import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props); // Component 가 가지고 있는 생성자 함수를 꺼내놓고 사용하려고 하는 밑작업 함수가 super(props) 임
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMOunt');
    console.log(this.myDiv.getBoundingClientRect());
  }
  render() {
    return (
      <div>
        <h1 ref={(ref) => (this.myDiv = ref)}>리액트의 라이프 사이클</h1>
      </div>
    );
  }
}

export default LifeCycle;
