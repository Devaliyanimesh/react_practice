import { ToastContainer } from "react-toastify"
import UseContaxt from "./1.Hook/UseContax/UseContaxt"
import UseEffect from "./1.Hook/UseEffect/UseEffect"
import Usereduser from "./1.Hook/UseReduser/Usereduser"
import UseRef from "./1.Hook/UseRef/UseRef"
import MultiInput from "./2.Input/MultiInput"
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css"
function App() {


  return (
    <>

      {/* 1.Hook ------------------> */}
      {/* <UseContaxt /> */}
      {/* <UseEffect/> */}
      {/* <Usereduser/> */}
      {/* <UseRef/> */}


      {/*2.Multiplae vallue --------->  */}
      <MultiInput/>

      <ToastContainer />
    </>
  )
}

export default App
