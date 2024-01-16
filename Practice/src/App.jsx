import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Input/Todo";
import Login from "./Login/login";
import Register from "./Login/Register";
import CheckBox from "./Input/CheckBox";
import Check from "./Input/Check";
import ApiGet from "./Api/ApiGet";
import InputTodoIndex from "./Todo/InputTodoIndex";

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
        {/* <Check/> */}
        {/* <ApiGet/> */}
        <InputTodoIndex/>
      </div>
    </>
  );
}

export default App;
