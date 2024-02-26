import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Toast } from "reactstrap";

export default function Inputt() {
  let [item, setItem] = useState({
    money: "",
    description: "",
    list: "",
    date: "",
  });
  let [data, setdata] = useState([]);
  const options = [
    { value: "food", label: "Food" },
    { value: "travel expenses", label: "Travel expenses" },
    { value: "cellphone", label: "CellPhone" },
    { value: "cable bill", label: "Cabel Bill" },
    { value: "housing", label: "Housing" },
    { value: "medicine ", label: "Medicine" },
    { value: "petrol", label: "Petrol" },
    { value: "cargas", label: "CarGas" },
    { value: "clothing", label: "Clothing" },
    { value: "grocery", label: "Grocery" },
  ];
  const itemData = (e) => {
    if (item.money === "") {
      toast.error("please fill money");
    } else if (item.description.length === 0) {
      toast.error("please fill description");
    } else if (item.list === "") {
      toast.error("please fill description");
    } else if (item.date === "") {
      toast.error("please fill date");
    }
    else{


    setdata([...data, item]);
    localStorage.setItem("item", JSON.stringify([...data, item]));
    setItem({ money: "",
    description: "",
    list: "",
    date: "",})
    e.preventDefault();
  }

  };

  console.log(item.date);
  return (
    <>
      <Form className="border border-black rounded w-25 p-4 flex flex-col   justify-center m-auto">
        <h3>Write the cost per day</h3>
        <FormGroup>
          <Label>1.Enter your expenses</Label>
          <Input
            placeholder="Enter your expenses...."
            type="number"
            onChange={(e) => setItem({ ...item, money: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>2.what did ?</Label>
          <Input
            placeholder="Discription..."
            type="textarea"
            onChange={(e) => setItem({ ...item, description: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>3.List</Label>

          <Select
            options={options}
            onChange={(e) => setItem({ ...item, list: e.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>4.List</Label>

          <Input
            type="date"
            onChange={(e) => setItem({ ...item, date: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100" onClick={(e) => itemData(e)}>
          Submit
        </Button>
      </Form>
    </>
  );
}
