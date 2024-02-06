import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
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
let sizeOptions = ["42", "43", "44", "45"];
export default function InputDatapost() {
  let [productt, setProduct] = useState(Product);
  let [allproduct, setAllproduct] = useState([]);
  let [refres, setRefresh] = useState(true);

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
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
    setRefresh(!refres);
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
  }, [refres]);
  const deletHandler = (e) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${e?._id}`,
      data: productt,
    }) .then((res) => {
      toast.success("upadate is  delete");
    })
    .catch((error) => {
      toast.error("--->", error.message);
    });
  setRefresh(!refres);;
    setRefresh(!refres);
  };

  const updateHandler = (e) => {
    setModal(!modal);
    setProduct(e);
  };
  const updateDataaHandler =()=>{
    axios({
      method:"put",
      url: `http://localhost:9999/product/put/${productt?._id}`,
      data:productt
    }) .then((res) => {
      toast.success("data is update");
      setRefresh(!refres);
    })
    .catch((error) => {
      toast.error("--->", error.message);
    });
  }
  return (
    <>
      <Button color="danger" onClick={toggle}>
        Product
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form</ModalHeader>
        <ModalBody>
          <Form style={{ margin: "auto", padding: "10px" }}>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input
                type="text"
                value={productt.title}
                onChange={(e) =>
                  setProduct({ ...productt, title: e.target.value })
                }
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
                onChange={(e) =>
                  setProduct({ ...productt, brand: e.target.value })
                }
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
                onChange={(e) =>
                  setProduct({ ...productt, price: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">discountPercentage</Label>
              <Input
                type="text"
                value={productt.discountPercentage}
                onChange={(e) =>
                  setProduct({
                    ...productt,
                    discountPercentage: e.target.value,
                  })
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
                value={productt.category?.map((ele) => {
                  return { value: ele, label: ele };
                })}
                onChange={(e) => selectHandler(e, "category")}
              />
            </FormGroup>
            <FormGroup>
              <Label>Color</Label>
              <Select
                isMulti
                options={data}
                value={productt.color?.map((color) => {
                  return { value: color, label: color };
                })}
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
           <Button onClick={updateDataaHandler}>Update</Button>

            <Button
              className="w-100"
              onClick={(e) => transferData(e)}
              color="danger"
            >
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
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
                      {sizeOptions.map((ee) => {
                        return (
                          <div
                            style={
                              e.size.includes(ee)
                                ? { backgroundColor: "green", color: "white" }
                                : { backgroundColor: "gray", color: "white" }
                            }
                          >
                            {ee}
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
