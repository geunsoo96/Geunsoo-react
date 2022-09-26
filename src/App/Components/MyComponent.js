export default function MyComponent(props) {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      <br />
      childeren 값은 {props.children}입니다.
    </div>
  );
}
MyComponent.defaultProps = {
  name: '기본이름',
};

// import './App.css';
// import MyComponent from './Components/MyComponent';

// function App() {
//   return <MyComponent>리액트</MyComponent>;
// }
// export default App;
