import useLocalstorage from "../hooks/useLocalstorage";


function TaskLocal() {
const  [Count,setCount] = useLocalstorage("key1",1)
  function multiply() {
    setCount(Count * 2);
  }
  function division() {
    setCount(Count / 2);
  }


  return (
    <div className="general">
      <h1>Score</h1>
      <h2>Count : {Count}</h2>
      <button onClick={() => multiply()}>increase</button>
      <button onClick={() => division()}>decrease</button>
    </div>
  );
}

export default TaskLocal;
