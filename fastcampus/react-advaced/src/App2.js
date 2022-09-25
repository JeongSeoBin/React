import React from "react";

// class Person extends React.Component {
class Person extends React.PureComponent {
  // 이전 상태와 비교했을때 변경 사항이 없는 경우 랜더링하지 않는다
  // 이와 같이 작성된 shouldComponentUpdate()를 가진 컴포넌트가 되려면 PureComponent를 상속받는다
  // shouldComponentUpdate(prevProps) {
  //   for(const key in this.props){
  //     if(prevProps[key] !== this.props[key]) {
  //       return true
  //     }

  //     return false
  //   }
  // }

  render() {
    const { name, age } = this.props;

    return (
      <div>
        {name} / {age}
      </div>
    );
  }
}

// React.memo() : pure component의 역할을 한다
const Person_func = React.memo(({ name, age }) => {
  return (
    <div>
      {name} / {age}
    </div>
  );
});

class App extends React.Component {
  state = {
    text: "",
    persons: [
      { id: 1, name: "anana", age: 10 },
      { id: 2, name: "mark", age: 50 },
    ],
  };

  render() {
    const { text, persons } = this.state;

    return (
      <div>
        <input type="text" value={text} onChange={this._change} />
        <ul>
          {persons.map((person) => {
            return <Person {...person} key={person.id} />;
          })}
        </ul>
      </div>
    );
  }

  // 이벤트 함수는 arrow function으로 따로 정의 후 지정
  _change = (e) => {
    // text state가 변경되어 재랜더링 시 text state와 상관없는 Person component는 랜더링되지 않게 최적화 작업이 필요하다 ( pure component / React.memo() )
    this.setState({
      ...this.state,
      text: e.target.value,
    });
  };
}

export default App;
