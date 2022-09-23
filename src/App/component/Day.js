import dummy from '../component/db/data.json';

export default function Day() {
  // dummy.words
  return (
    <>
      <table>
        <tbody>
          {dummy.word.map((word) => (
            <tr>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
