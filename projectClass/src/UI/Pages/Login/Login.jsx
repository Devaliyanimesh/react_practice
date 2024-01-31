// import React, { useEffect, useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { toast } from "react-toastify";
// import {

 
  
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";
// import {NavLink} from 'react-router-dom';
// function Login({modal,toggle}) {
//     let [value, setValue] = useState({
//         email: "",
//         password: "",
//       });
//       let [data, setData] = useState([]);
//       let [locall, setLocall] = useState(null);
//       const dataHandler = (e) => {
//         e.preventDefault();
//         let emailmatch=locall?.some?.((e)=> e?.email === value?.email )
//         let passwordmatch=locall?.some?.((e)=> e?.password === value?.password )
    
//         if (!emailmatch || !passwordmatch ) {
//           toast.error("your email is not match please register")
//         }
//         else if (value.email === " " || value.password === "") {
//           toast.error("please fill up data");
//         } else {
//           setData([...data, value]);
//           setValue({
//             email: "",
//             password: "",
//           });
//           localStorage.setItem("local", JSON.stringify([...data, value]));
//           toggle();
//         }
//       };
      
    
    
//       useEffect(() => {
//         let json = localStorage.getItem("add");
//         let normal = JSON.parse(json);
//         setLocall(normal);
//       }, []);
//   return (
//     <div>
     
//       <Modal isOpen={modal} toggle={toggle} >
//         <ModalHeader toggle={toggle}>Login</ModalHeader>
//         <ModalBody>
//         <Form>
//             <FormGroup>
//               <Label for="exampleEmail">Email</Label>
//               <Input
//                 id="exampleEmail"
//                 name="email"
//                 placeholder="with a placeholder"
//                 type="email"
//                 value={value.email}
//                 onChange={(e) => setValue({ ...value, email: e.target.value })}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input
//                 id="examplePassword"
//                 name="password"
//                 placeholder="password placeholder"
//                 type="password"
//                 value={value.password}
//                 onChange={(e) =>
//                   setValue({ ...value, password: e.target.value })
//                 }
//               />
//             </FormGroup>
//             <Button  className="w-100" color="danger" onClick={dataHandler}>
            
            
//             </Button>
//           </Form>
//         </ModalBody>
      
//       </Modal>
//     </div>
//   );
// }

// export default Login;