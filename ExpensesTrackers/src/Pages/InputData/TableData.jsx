import React, { useEffect, useState } from "react";
import img1 from "./../../img/food.jpg";
import img2 from "./../../img/travel.webp";
import img3 from "./../../img/cellphonebill.jpg";
import img4 from "./../../img/cabelbill.jpg";
import img5 from "./../../img/housing.jpg";
import img6 from "./../../img/medicisens.jpg";
import img7 from "./../../img/bike.jpg";
import img8 from "./../../img/petrole.jpg";
import img9 from "./../../img/clothing.jpg";
import img10 from "./../../img/grocery.jpg";
import { Input, Table } from "reactstrap";

let imgg = [
  { img: img1, type: "food" },
  { img: img2, type: "travel" },
  { img: img3, type: "cellphonebill" },
  { img: img4, type: "cablebill" },
  { img: img5, type: "housing" },
  { img: img6, type: "medicisens" },
  { img: img7, type: "bike" },
  { img: img8, type: "petrol" },
  { img: img9, type: "clothing" },
  { img: img10, type: "grocery" },
];

export default function TableData({ data }) {
  const [local, setLocal] = useState([]);
  const [filteredLocal, setFilteredLocal] = useState([]);
  const [ref, setRef] = useState(true);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("item"));
    setLocal(localData || []);
    setFilteredLocal(localData || []);
  }, [data]);

  const clickButton = (e) => {
    const filterMode = local.filter((item, i) =>item.list.value=== e.type);
    setFilteredLocal(filterMode);                                 
    setRef(!ref);filterMode
  };

  useEffect(() => {}, [ref]);

  return (
    <>
      <div className="d-flex mt-3 gap-4 items-center px-2 justify-center">
        {imgg.map((e, i) => (
          <div
            key={i}
            className="d-flex"
            role="button"
            onClick={() => clickButton(e)}
          >
            <div
              className="overflow-hidden w-20 h-20 relative"
              style={{ borderRadius: "50%" }}
            >
              <img src={e.img} className="w-full h-full" alt="" />
            </div>
            <div
              className="absolute bg-black opacity-30 hover:opacity-0 transition duration-300 ease-in-out"
              style={{ borderRadius: "50%", width: "5.3%", height: "11.2%" }}
            ></div>
          </div>
        ))}
        <div>
          <Input type="date" />
        </div>
      </div>
      <Table className="mt-2">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Money</th>
            <th>Description</th>
            <th>List</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredLocal.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e?.money}</td>
              <td>{e?.description}</td>
              <td>{e?.list.value}</td>
              <td>{e?.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
