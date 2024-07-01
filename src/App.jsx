import Item from "./components/Item";
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Input from "./components/input";

function App() {
  var [data, setthis] = useState("");
  var [total, add] = useState([]);
  function countinue(e) {
    setthis(e.target.value);
  }
  function todo() {
    if (data != false) {
      add((old) => [...old, data]);
      setthis("");
    }
  }

  function del(index) {
    add((old) =>
      old.filter((old, oldindex) => {
        return oldindex != index;
      })
    );
  }
  return (
    <>
      <section>
        <h1>To-Do List</h1>
        <Input data={data} func={countinue} todo={todo} />
        <Item total={total}  del={del}/>
      </section>
    </>
  );
}

export default App;
