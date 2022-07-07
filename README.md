        현재 react 문서는 김민준 veloper 강의를 인프런에서 참고하여 복습중이다.
        React 문법과 생명주기등을 개념정리해가면서 들을 예정이다.
        visual studio setting.json 에서 jsx를 위한 eslint 설정을 해줘서 자동입력이 가능하게 설정해준 상태이다. 원래는 자동입력이 안됨.


        jsx의 기본 문법

        1. 태그들을 꼭 닫아줘야한다
            예) <input type="text" /> -> 셀프클로우징 태그

        2. 두개 이상의 태그는 하나의 태그로 감싸줘야한다!
            - 태그들을 감싸기 위해 불필요한 div를 생성해야할땐 fragment 태그 <></> 로 감싸줘도됨

        3. jsx 내부에서 자바스크립트 값을 사용할땐

            const name = 'react';
            return(
                <div>
                hello {name}! // hello react! 가 출력됨
                </div>
            )
            * 여기서잠깐!
            var의 scope가 함수단위, let이랑 const는 블록단위('{}' 헷갈리면 여닫은중괄호 사이가 블록이라고 생각해도 됨)
            var : 더 이상 쓰지마...
            const: 한번 선언 후 고정적인 값
            let: 유동적인 값 ex) for문으로 i 값이 계속 증가되는 코드를 짤때 i를 let으로 선언해줌

        4. jsx에서 함수 사용하기
                - 조건부 랜더링을 할때 {}안에 삼항연산자나 &&와 같은 것을 사용 , if 를 바로 사용할수 없다.
                - if문을 사용하고 싶다면 jsx 내부에서 function 함수를 적고 안에 if문 작성하면됨
                    형식은 { (function(){실행문}) ()  } --> 안에 함수를 쓰고 바로 실행해버리는 것임, 보통 이렇게 안씀

                        *여기서 잠깐! 화살표 함수에대하여:
                            function()대신 ()=> 로 쓰는 건데 this, arguments, super 이런 개념이 없으므로 사용할때 주의해야함

        jsx 안에서 css 규칙
                1. css에서 style을 직접 지정하는 속성을 사용할때 속성들의 이름을  카멜케이스로 적어준다 backGroundColor...fontSize... 대시대신에 그 사이를 대문자로 바꿔줌
                2. css 안에서 사칙연산이 가능하다! width : '5 + 5 px' 이러면 자동으로 width 10px 으로 계산해줌 와우
                3. css class를 지정할때 className="클래스이름", 요즘에는 그냥 class라고 입력해도 되긴 된다만... 그냥 jsx문법을 따르자
                4. 주석문은 브라켓으로 감싸줘야 주석처리가 된다,
                    태그 사이에 써도 주석처리가 됨 ex) <h1 //여기에다가 주석처리 가능 ></h1>

        import 할때
        import MyName from './MyName'; 요거랑
        import React, { Component } from 'react'; 요거
        이런식으로 import 하는데 무슨 차이일까?

        { } 는 class형 컴포넌트를 export하여 import할때 가져올때 사용
        그냥 {} 없이 파일이름(본인이직접지정)이 써져있을때는 함수형 컴포넌트를 export 시켰을때 사용한다

        예쁜 코드 정렬을 위해 setting.json 에 코드를 바꿨다 prettire 문서를 함 보면 나와있음

        [Props 와 state]

        props
        부모가 자식에게 값을 전달할때 사용한다

        부모에서 값을 전달하려면 부모 태그 안에 <MyName 값이름="값"></MyName> 값을 적고
        자식 컴포넌트에 {this.props.값이름} 이런식으로 받아올수있다

        그리고 부모값을 전달 받지 못했을때 기본값으로 설정할 수있는 방법은 두가지 인데

        1. 클래스혹은 함수형 컴포넌트 코드안 render() 하기 전에
        static defaultProps = {
        name: '기본이름',
        };
        이런식으로 static defaultProps값을 적어주거나

        컴포넌트 코드 밖에
        MyName.defaultProps = {
        name: '밖에서사용하는 기본이름',
        };

        이런식으로 사용하면 되고 전자가 더 최신코드이다.
