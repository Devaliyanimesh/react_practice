import React, { useState } from "react";
import Select from "react-select";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
const Product = {
  title: "",
  description: "",
  brand: "",
  gender: "", // radio
  price: "", // number
  discountPercentage: "", // text
  availableStock: "", // text
  category: [], // select
  thumbnail: "", // text
  color: [], // select
  size: [], // checkbox
};
let gender = ["male", "Female", "kids"];
let data = [
  { value: "green", label: "Green" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];
let category = [
  { value: "small", label: "Small" },
  { value: "large", label: "Large" },
  { value: "extralarge", label: "Extralarge" },
];
export default function InputDatapost() {
  let [productt, setProduct] = useState(Product);
  let selectHandler = (e, type) => {
    if (type === "color") {
      let color = e.map((e) => e?.value);
      setProduct({ ...productt, color });
    } else if (type === "category") {
      let category = e.map((e) => e?.value);
      setProduct({ ...productt, category });
    }
  };
  console.log(productt);
  return (
    <>
      <Form
        className="w-25"
        style={{ margin: "auto", border: "2px solid black", padding: "10px" }}
      >
        <h1>Form</h1>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input
            type="text"
            onChange={(e) => setProduct({ ...productt, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">description</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...productt, description: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">brand</Label>
          <Input
            type="text"
            onChange={(e) => setProduct({ ...productt, brand: e.target.value })}
          />
        </FormGroup>
        <Label>Gender</Label>
        <div className="d-flex">
          {gender?.map((ee, i) => {
            return (
              <FormGroup className="d-flex" key={i}>
                <Label for="exampleEmail">{ee}</Label>
                <Input
                  type="radio"
                  name="name"
                  onChange={() => setProduct({ ...productt, gender: ee })}
                />
              </FormGroup>
            );
          })}
        </div>
        <FormGroup>
          <Label for="exampleEmail">price</Label>
          <Input
            type="number"
            onChange={(e) => setProduct({ ...productt, price: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">discountPercentage</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...productt, discountPercentage: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">availableStock</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...productt, availableStock: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Thumbnail</Label>
          <Input
            type="text"
            onChange={(e) =>
              setProduct({ ...productt, thumbnail: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>category</Label>
          <Select
            isMulti
            options={category}
            onChange={(e) => selectHandler(e, "category")}
          />
        </FormGroup>
        <FormGroup>
          <Label>Color</Label>
          <Select
            isMulti
            options={data}
            onChange={(e) => selectHandler(e, "color")}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}
