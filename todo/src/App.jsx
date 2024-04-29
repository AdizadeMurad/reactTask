import { useState } from "react";

import "./App.css";
import useLocalstorage from "./hooks/useLocalstorage";

function App() {
  const [todoMyInp, settodoMyInp] = useState("");
  const [todo, settodo] = useLocalstorage("myToDo",[]);

  function addTodo(e) {
    e.preventDefault();
    settodo([...todo, todoMyInp]);
    settodoMyInp("");
  }

  return (
    <>
      <div className="general">
        <form onSubmit={addTodo} action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="... To Do"
            value={todoMyInp}
            onChange={e => settodoMyInp(e.target.value)}
          />
        </form>
        <div>
          {todo.map((x, i) => 
            <h2 key={i}>{x}</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
