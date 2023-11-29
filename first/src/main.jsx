import React, { StrictMode } from "react"
import  ReactDOM  from "react-dom/client"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";




const root=ReactDOM.createRoot(document.getElementById("root")).render(

<>
<App/>
<ToastContainer />
</>
)
