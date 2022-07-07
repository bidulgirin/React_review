import React, { Component } from 'react'; //{ Component } 는 class형을 가져올때 사용 그냥 Component 이렇게 되어있으면 함수형 컴포넌트

const MyName = ({ name }) => {
  return <div>안녕! 내 이름은 {name} 이야 </div>;
};
/* 기본값 설정할때 사용 */
MyName.defaultProps = {
  name: '밖에서사용하는 기본이름',
};

export default MyName;
