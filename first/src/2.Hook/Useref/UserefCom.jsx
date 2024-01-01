import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Input } from "reactstrap";

export default function UserefCom() {
  const inputFocus = useRef();
  const divRef = useRef(null);

  const changeBg = () => {
    divRef.current.style.backgroundColor = "yellow";
    divRef.current.innerText = "hello";
    divRef.current.style.color = "black";
    inputFocus.current.focus();
  };

  return (
    <>
      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "green",
          color: "white",
          margin: "auto",
          display: "grid",
          placeContent: "center",
        }}
        ref={divRef}
      >
        My Name is Nimesh
        <Button onClick={changeBg}>Change Color</Button>
        <Input innerRef={inputFocus} />
      </div>
    </>
  );
}
