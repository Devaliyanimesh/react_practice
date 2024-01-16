import React from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export default function InputTodo({ input, setInput, inputdataHandler }) {
  return (
    <>
      <div className="d-flex align-items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e?.target?.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inputdataHandler();
            }
          }}
        />
        <Button onClick={() => inputdataHandler()}>Add</Button>
      </div>
    </>
  );
}
