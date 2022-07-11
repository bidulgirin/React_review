// PhonInfo : 스타일 지정해주고 , 어떻게 랜더될건지 정해주는 js 파일
// render가 되야하는 name과 phone info를  PhoneInfoList에서 가져오기러 함
import React, { Component } from 'react';

class PhoneInfo extends Component {
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id); //info.id
  };
  render() {
    const { name, phone } = this.props.info;
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
        <button onClick={this.handleRemove}> 삭제 </button>
      </div>
    );
  }
}

export default PhoneInfo;
