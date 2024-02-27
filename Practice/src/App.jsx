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
import Router from "./Todo/Router";
import Reduxx from "./Redux/UI/Redeux/Reduxx";
import RegiTypeSelect from "./SirTsk/RegiTypeSelect";
import UseReduser from "./Practic/UseReduser";
import Usecontext from "./Practic/context/usecontext";
import ApiPractice from "./Api/ApiPractice";

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
        {/* <InputTodoIndex/> */}
        {/* <Router/> */}
        {/* <Reduxx/> */}
        {/* <RegiTypeSelect/> */}
        {/* <UseReduser/> */}
        {/* <Usecontext/> */}
        <ApiPractice/>
      </div>
    </>
  );
}

export default App;
