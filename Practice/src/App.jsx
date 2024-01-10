import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Input/Todo";
import Login from "./Login/login";
import Register from "./Login/Register";
import CheckBox from "./Input/CheckBox";
import Check from "./Input/Check";

function App() {
  return (
    <>
      <div>
      {/* <CheckBox/> */}
        {/* <Todo /> */}
        {/* <div className="d-flex gap-4 p-5">
          <Register />
          <Login />
        </div> */}
        <Check/>
      </div>
    </>
  );
}

export default App;
