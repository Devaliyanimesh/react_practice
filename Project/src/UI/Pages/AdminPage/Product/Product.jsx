import React, { useState } from "react";
import ProducttModal from "./ProducttModal";
import ProducttTable from "./ProducttTable";
import { Button } from "reactstrap";
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
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  let [refresh, setRefresh] = useState(true);
  const refresHandler = () => {
    setRefresh(!refresh);
  };
  let [product, setProduct] = useState(intialProduct);


  return (
    <>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <ProducttModal
        modal={modal}
        toggle={toggle}
        refresHandler={refresHandler}
        produc={product}
        setProduc={setProduct}
      />
      <ProducttTable refresh={refresh} refresHandler={refresHandler} setProduct={setProduct} toggle={toggle} />
    </>
  );
}
