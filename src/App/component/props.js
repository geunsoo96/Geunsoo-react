import { useState } from 'react';
export default function Props(props) {
  const [name, setName] = useState('mike');
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';
  return (
    <>
      <h2>
        {name}({age}:{msg})
      </h2>
      <button
        onClick={() => {
          setName(name === 'mike' ? 'jane' : 'mike');
          setAge(age + 1);
        }}
      >
        change
      </button>
    </>
  );
}
