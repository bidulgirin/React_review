import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  };
  //자식이 부모에게 값을 전달하는 방법 onCreate

  handleSubmit = (e) => {
    e.preventDefault(); // submit 누르면 새로고침되는것을 막기위해서
    this.props.onCreate(this.state);
    //일일이 적지 않고 this.state로 전달해도됨

    // this.props.onCreate({
    //  name: this.state.name,
    //  phone: this.state.phone,
    //});

    //submit 눌렀을때 초기화
    this.setState({
      name: '',
      phone: '',
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name" //여기에서 input들을 구별할수있게 해주는 식별자가 된다.
            placeholder="이름"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
