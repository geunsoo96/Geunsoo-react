export default function Event() {
  function showName() {
    console.log('mike');
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt);
  }
  return (
    <div>
      <h1>hi</h1>
      <button onClick={showName}>Show Name</button>
      <button
        onClick={() => {
          showAge(30);
        }}
      >
        Show age
      </button>
      <input
        type='text'
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      ></input>
    </div>
  );
}
