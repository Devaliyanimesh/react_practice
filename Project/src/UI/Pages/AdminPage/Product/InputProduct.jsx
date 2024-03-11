import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";

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
let gender = ["male", "female", "kids"];
let category = [
  { value: "casual", label: "Casual" },
  { value: "highlength", label: "Highlength" },
];
let data = [
  { value: "car", label: "Car" },
  { value: "bike", label: "Bike" },
  { value: "phone", label: "Phone" },
  { value: "laptop", label: "Laptop" },
];
let sizeOptions = ["42", "43", "44", "45"];

export default function InputProduct() {
  let [product, setProduct] = useState(Product);
  console.log(product);




 const  selectHandler =(e)=>{
 }



  // chekboxHandler

  const checkboxHandler = (size) => {
    if (product.size.includes(size)) {
      let filter = product.size.filter((e, i) => {
        return e !== size;
      });
      setProduct({...product,size:filter})
    } else {
      setProduct({ ...product, size: [...product.size, size] });
    }
  };

  return (
    <Form style={{ margin: "auto", padding: "10px" }}>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input
          type="text"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">description</Label>
        <Input
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">brand</Label>
        <Input
          type="text"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
        />
      </FormGroup>
      <Label>Gender</Label>
      <div className="d-flex gap-2">
        {gender?.map((ee, i) => {
          return (
            <FormGroup className="d-flex" key={i}>
              <Input
                type="radio"
                checked={product.gender === ee}
                onChange={() => setProduct({ ...product, gender: ee })}
              />

              <Label for="exampleEmail" className="ms-2">
                {ee}
              </Label>
            </FormGroup>
          );
        })}
      </div>
      <FormGroup>
        <Label for="exampleEmail">price</Label>
        <Input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">discountPercentage</Label>
        <Input
          type="text"
          value={product.discountPercentage}
          onChange={(e) =>
            setProduct({
              ...product,
              discountPercentage: e.target.value,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">availableStock</Label>
        <Input
          type="text"
          value={product.availableStock}
          onChange={(e) =>
            setProduct({ ...product, availableStock: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Thumbnail</Label>
        <Input
          type="text"
          value={product.thumbnail}
          onChange={(e) =>
            setProduct({ ...product, thumbnail: e.target.value })
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
        <Label>Accesories</Label>
        <Select
          isMulti
          options={data}
          // styles={customStyles}
          // defaultValue={data[0]}

          onChange={(e) => selectHandler(e)}
        />
      </FormGroup>
      <Label>Size</Label>
      <div className="d-flex">
        {sizeOptions.map((size, index) => (
          <FormGroup key={index} className="d-flex">
            <Input
              type="checkbox"
              onChange={() => checkboxHandler(size)}
              checked={product.size.includes(size)}
            />

            <Label className="mx-2">{size}</Label>
          </FormGroup>
        ))}
      </div>

      <Button className="w-100" onClick={(e) => transferData(e)} color="danger">
        Submit
      </Button>
    </Form>
  );
}
