import React from "react";

import useInput from "./hooks/useInput";
import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const { data: name, onChange: onChangeName, onReset: onResetName } = useInput(
    "Kosasih"
  );

  const {
    data: batch,
    onChange: onChangeBatch,
    onReset: onResetBatch,
  } = useInput("orion-fox");

  const [users, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Belajar Custome Hooks</h1>
      <label>Name</label>
      <input type="text" onChange={onChangeName} value={name} />
      <button onClick={onResetName}>Reset</button>
      <br />
      <label>Batch</label>
      <input type="text" onChange={onChangeBatch} value={batch} />
      <button onClick={onResetBatch}>Reset</button>
      <hr />
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

export default App;
