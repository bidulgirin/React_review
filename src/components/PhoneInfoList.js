import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  //배열 data 기본값으로 빈배열을 주면 오류 안뜸
  static defaultProps = {
    data: [],
  };
  render() {
    const { data, onRemove } = this.props; //비구조 할당 레퍼런스를 만들어주고 값을 전달함
    //data값이 없으면 null 출력 다른방법으로는 defaultProps 값을 설정해주는 것임
    if (!data) return null;
    //info들의 배열을 가지고 PhonInfo 컴포넌트로 변화를 시킨거다.
    const list = data.map((info) => <PhoneInfo onRemove={onRemove} info={info} key={info.id} />);
    //key값의 역할 react에서 추가,수정,삭제를 효율적으로 하기 위해 없으면 비효율적으로 동작함
    return <div>{list}</div>; //그리고 그 리스트의 배열값을 반환
  }
}

export default PhoneInfoList;
