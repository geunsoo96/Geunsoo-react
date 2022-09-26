import './App.css';
import TestMarkup from './Components/testMarkup';
import styled from 'styled-components';

function App() {
  const Parant = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Root = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
  `;
  return (
    <Parant>
      <Root>
        <TestMarkup></TestMarkup>
      </Root>
    </Parant>
  );
}
export default App;
