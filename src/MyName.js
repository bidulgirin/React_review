import React, { Component } from 'react';

class MyName extends Component {
  /* 기본값 설정할때 static defaultProps를 사용 아래 방법 보다 더 최신 코드 */

  static defaultProps = {
    name: '기본이름',
  };
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다!
      </div>
    );
  }
}
/* 기본값 설정할때 사용 */
MyName.defaultProps = {
  name: '밖에서사용하는 기본이름',
};

export default MyName;
