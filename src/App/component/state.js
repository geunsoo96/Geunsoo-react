import { useState } from 'react';
export default function State() {
  // let name = 'mike';
  const [name, setName] = useState('mike');
  function changeName() {
    const newName = name === 'mike' ? 'jane' : 'mike';
    setName(newName);
  }
  return (
    <>
      <h1>state</h1>
      <h2>{name}</h2>
      <button onClick={changeName}>change</button>
    </>
  );
}
