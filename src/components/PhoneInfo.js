// PhonInfo : 스타일 지정해주고 , 어떻게 랜더될건지 정해주는 js 파일
// render가 되야하는 name과 phone info를  PhoneInfoList에서 가져오기러 함
import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: '',
    phone: '',
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id); //info.id
  };
  //편집모드 왔다리 갔다리
  handleToggleEdit = () => {
    /*
      2가지 로직이 필요함
      1. true 에서 false로 변화할때
         onUpdate 로 부모에게 소식을 알려야함 
      2. false 에서 true 로 변화할때
        state에 info 값(name, phone))들을 넣어주기
       
    */
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
    });
  };
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    };
    const { name, phone } = this.props.info;
    const { editing } = this.state;

    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <div>
              <input name="name" onChange={this.handleChange} value={this.state.name} />
            </div>
            <div>
              <input name="phone" onChange={this.handleChange} value={this.state.phone} />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </Fragment>
        )}
        <button onClick={this.handleRemove}> 삭제 </button>
        <button onClick={this.handleToggleEdit}>{editing ? '적용' : '수정'}</button>
      </div>
    );
  }
}

export default PhoneInfo;
