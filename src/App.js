import { useState } from "react";
import "./App.css";

function App() {
  const originalArr = ["apple", "banana", "cherry", "date", "elderberry"];
  const [text, setText] = useState("");
  const [original, setOriginal] = useState(originalArr);
  const [result, setResult] = useState("");

  const sliceButton = () => {
    const resultSlice = original.slice(0, -2);
    setResult(resultSlice.join(", "));
  };
  const spliceButton = () => {
    original.splice(2, 2, "kiwi", "lime"); // 배열3번째부터 2개를 삭제하고 kiwi와 lime을 생성한다
    setResult(original.join(", "));
  };
  const indexOfButton = () => {
    const indexFirst = originalArr.indexOf(text); //originalArr에다가 text를 value로 가지는 indexOf를정함
    setResult(indexFirst);
  };
  const includesButton = () => {
    const includeResult = originalArr.includes(text);
    setResult(includeResult ? "true" : "false");
  };
  const findButton = () => {
    const resultFind = originalArr.find((arr) => arr === text); //입력된 text를value로 가지는input이 arr메서드를 가지는 요소에서
    setResult(resultFind ? resultFind : "Not Found"); // 일치한 값을 찾게되면 resultFind를 불러온다.
  };
  const someButton = () => {
    const resultSome = originalArr.some((arr) => arr === text);
    setResult(resultSome ? "true" : "false");
  };
  const everyButton = () => {
    const resultEvery = originalArr.every((arr) => arr > text);
    setResult(resultEvery ? "true" : "false");
  };
  const sortButton = () => {
    const resultSort = originalArr.sort();
    setResult(resultSort);
  };

  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "32px",
          textAlign: "center",
        }}
      >
        Standard반 배열 API
      </div>
      <br />
      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />

      {/* 1. slice */}
      <button onClick={sliceButton}>slice</button>
      {/* 2. splice */}
      <button onClick={spliceButton}>splice</button>
      {/* 3. indexOf */}
      <button onClick={indexOfButton}>indexOf</button>
      {/* 4. includes */}
      <button onClick={includesButton}>includes</button>
      {/* 5. find */}
      <button onClick={findButton}>find</button>
      {/* 6. some */}
      <button onClick={someButton}>some</button>
      {/* 7. every */}
      <button onClick={everyButton}>every</button>
      {/* 8. sort */}
      <button onClick={sortButton}>sort</button>

      <div>원본배열 : {original.join(", ")}</div>
      <div>결과물 : {result} </div>
    </>
  );
}

export default App;
