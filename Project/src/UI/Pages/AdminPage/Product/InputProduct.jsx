import axios from "axios";
import { Edit, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];
const categoryOptions = [
  { value: "casual", label: "casual" },
  { value: "sports", label: "sports" },
  { value: "formal", label: "formal" },
  { value: "party-Wear", label: "party Wear" },
];

const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "",
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [],
  thumbnail: "",
  color: [],
  size: [],
};

export default function Product() {
  let [product, setProduct] = useState(intialProduct);
  console.log(product);
  
  let selectHandler = (e, type) => {
    if (type === "color") {
      let color = e.map((e) => e?.value);
      setProduct({ ...product, color });
    } else if (type === "category") {
      let category = e.map((e) => e?.value);
      setProduct({ ...product, category });
    }
  };

  return (
    <div>
      <Form onSubmit={(e) => submitHandler(e)}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter Title"
            type="text"
            value={product?.title}
            onChange={(e) =>
              setProduct({ ...product, title: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            placeholder="Enter description"
            type="text"
            value={product?.description}
            onChange={(e) =>
              setProduct({ ...product, description: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="brand">Brand</Label>
          <Input
            id="brand"
            placeholder="Enter brand"
            type="text"
            value={product?.brand}
            onChange={(e) =>
              setProduct({ ...product, brand: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label>Gender</Label>
          <div className="d-flex w-100 gap-3">
            <FormGroup>
              <Input
                type="radio"
                className="me-2"
                checked={product.gender === "male"}
                onChange={() => setProduct({ ...product, gender: "male" })}
              />
              <Label>Male</Label>
            </FormGroup>
            <FormGroup disabled>
              <Input
                type="radio"
                className="me-2"
                checked={product?.gender === "female"}
                onChange={() => setProduct({ ...product, gender: "female" })}
              />
              <Label>Female</Label>
            </FormGroup>
            <FormGroup>
              <Input
                type="radio"
                className="me-2"
                checked={product?.gender === "kids"}
                onChange={() => setProduct({ ...product, gender: "kids" })}
              />
              <Label>Kids</Label>
            </FormGroup>
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="color">Color</Label>
          <Select
            id="color"
            isMulti
            options={colorOptions}
            value={product.color?.map((color) => {
              return { value: color, label: color };
            })}
            onChange={(e) => selectHandler(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Select
            id="category"
            isMulti
            options={categoryOptions}
            value={product.category?.map((ele) => {
              return { value: ele, label: ele };
            })}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.map((ele) => ele.value),
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            id="price"
            placeholder="Enter price"
            type="number"
            value={product?.price}
            onChange={(e) =>
              setProduct({ ...product, price: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="discountPercentage">Discount</Label>
          <Input
            id="discountPercentage"
            placeholder="Enter brand"
            type="number"
            value={product?.discountPercentage}
            onChange={(e) =>
              setProduct({
                ...product,
                discountPercentage: e?.target?.value,
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="thumbnail">Image</Label>
          <Input
            id="thumbnail"
            placeholder="Enter image"
            value={product?.thumbnail}
            type="text"
            onChange={(e) =>
              setProduct({ ...product, thumbnail: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="availableStock">Available Stock</Label>
          <Input
            id="availableStock"
            placeholder="Enter brand"
            type="number"
            value={product?.availableStock}
            onChange={(e) =>
              setProduct({ ...product, availableStock: e?.target?.value })
            }
          />
        </FormGroup>
        <Label for="checkBox40">Size</Label>
        <FormGroup className="d-flex gap-2">
          {["41", "42", "43", "44", "45"]?.map?.((e,i) => {
            return (
              <div key={i}>
                <Input
                  id="checkBox40"
                  type="checkbox"
                  checked={product?.size?.includes?.(e)}
                  onChange={() => checkHandler(e)}
                  className="me-2"
                />
                <Label for="checkBox40">{e}</Label>
              </div>
            );
          })}
        </FormGroup>

        <Button color="danger" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}
