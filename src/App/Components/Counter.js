// 클래스형 컴포넌트
import { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초깃값 설정
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

// import './App.css';
// import Counter from './Components/Counter';

// function App() {
//   return;

//   <Counter></Counter>;
// }
// export default App;
