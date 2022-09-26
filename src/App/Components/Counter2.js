// state 객체 안에 여러 값이 있을 때
import { Component } from 'react';

class Counter2 extends Component {
  constructor(props) {
    super(props);
    // state 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    console.log(number);
    console.log(fixedNumber);
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정함
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1, fixedNumber: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// export default Counter2;

// import './App.css';
// import Counter2 from './Components/Counter2';

// function App() {
//   return (
//     <>
//       <Counter />
//       <Counter2 />
//     </>
//   );
// }
// export default App;
