// PhonInfo : 스타일 지정해주고 , 어떻게 랜더될건지 정해주는 js 파일
// render가 되야하는 name과 phone 값 을 외부에서 가져와야함
import React, { Component } from 'react';

class PhoneInfo extends Component {
  render() {
    const { name, phone, id } = this.props.info;
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    };
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
