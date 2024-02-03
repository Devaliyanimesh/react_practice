import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Select from "react-select";
import { toast } from "react-toastify";
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
  { value: "casual", label: "Casual" },
  { value: "highlength", label: "Highlength" },
];
let sizeOptions = ["40", "41", "42", "43"];
export default function InputDatapost() {
  let [productt, setProduct] = useState(Product);
  let [allproduct, setAllproduct] = useState([]);

  let selectHandler = (e, type) => {
    if (type === "color") {
      let color = e.map((e) => e?.value);
      setProduct({ ...productt, color });
    } else if (type === "category") {
      let category = e.map((e) => e?.value);
      setProduct({ ...productt, category });
    }
  };

  const checkboxHandler = (sizeValue) => {
    if (productt.size.includes(sizeValue)) {
      setProduct({
        ...productt,
        size: productt.size.filter((size) => size !== sizeValue),
      });
    } else {
      setProduct({ ...productt, size: [...productt.size, sizeValue] });
    }
  };

  const transferData = (e) => {
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: productt,
    })
      .then((res) => {
        console.log(res.data);
        toast.success("data add");
      })
      .catch((error) => {
        toast.error("--->", error.message);
      });
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setAllproduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);
  const deletHandler = (e) => {
    console.log(e?._id);
  };
  const updateHandler = (e) => {
    setProduct(e);
  };
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
            value={productt.title}
            onChange={(e) => setProduct({ ...productt, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">description</Label>
          <Input
            type="text"
            value={productt.description}
            onChange={(e) =>
              setProduct({ ...productt, description: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">brand</Label>
          <Input
            type="text"
            value={productt.brand}
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
                  checked={productt.gender === ee}
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
            value={productt.price}
            onChange={(e) => setProduct({ ...productt, price: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">discountPercentage</Label>
          <Input
            type="text"
            value={productt.discountPercentage}
            onChange={(e) =>
              setProduct({ ...productt, discountPercentage: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">availableStock</Label>
          <Input
            type="text"
            value={productt.availableStock}
            onChange={(e) =>
              setProduct({ ...productt, availableStock: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Thumbnail</Label>
          <Input
            type="text"
            value={productt.thumbnail}
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
            value={productt.category}

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
        <Label>Size</Label>
        <div className="d-flex">
          {sizeOptions.map((size, index) => (
            <FormGroup key={index} className="d-flex">
              <Label>{size}</Label>
              <Input
                type="checkbox"
                onChange={() => checkboxHandler(size)}
                checked={productt.size?.includes(size)}
              />
            </FormGroup>
          ))}
        </div>

        <Button
          className="w-100"
          onClick={(e) => transferData(e)}
          color="danger"
        >
          Submit
        </Button>
      </Form>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>SR.</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>COLOR</th>
              <th>SIZE</th>
              <th>Update</th>
              <th>Delet</th>
            </tr>
          </thead>
          <tbody>
            {allproduct?.map?.((e, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    <img style={{ height: "30px" }} src={e?.thumbnail} alt="" />
                  </td>
                  <td>{e?.title}</td>
                  <td>{e?.price}</td>
                  <td>
                    <div className="d-flex gap-2">
                      {e?.color.map((color) => {
                        return (
                          <div
                            style={{
                              height: "10px",
                              width: "10px",
                              border: "1px solid black",
                              borderRadius: "50%",
                              backgroundColor: color,
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      {" "}
                      {e?.size.map((e) => {
                        return (
                          <div
                            style={
                              e == 40
                                ? { backgroundColor: "green", color: "white" }
                                : { backgroundColor: "white", color: "gray" }
                            }
                          >
                            {e}
                          </div>
                        ); /* first  Task*/
                      })}
                    </div>
                  </td>
                  <td>
                    <Button onClick={() => updateHandler(e)}>Update</Button>
                  </td>
                  <td>
                    <Button onClick={() => deletHandler(e)}>Delet</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
