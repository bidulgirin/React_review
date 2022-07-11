import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    //(nextProps=다음에가져올props값 , prevState=업데이트전상태값가져옴)
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }
  render() {
    return (
      <>
        <p> props: {this.props.value} </p>
        <p> state: {this.state.value} </p>
      </>
    );
  }
}

export default MyComponent;
