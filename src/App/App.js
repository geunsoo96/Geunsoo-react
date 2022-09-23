import './App.css';

function App() {
  const name = 'tom';
  const naver = {
    name: '네이버',
    url: 'http://naver.com',
  };
  return (
    <div className='App'>
      <h1
        style={{
          color: 'red',
          backgroundColor: 'blue',
        }}
      >
        Hello, {name}
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}
// component
export default App;
