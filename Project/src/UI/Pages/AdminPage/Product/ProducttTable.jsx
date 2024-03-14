import { Button, Table } from "reactstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
let sizeOptions = ["41", "42", "43", "44", "45"];
export default function ProducttTable({
  refresh,
  refresHandler,
  setProduct,
  toggle,
  UpdateHandler,
  Preview,
}) {
  let [data, setData] = useState(null);
  let [pagination, setpagination] = useState({
    totalproduct: 0,
    
    limit: 10,
    page: 0,
  });
  const handlePageClick = (e) => {
    setpagination({ ...pagination, page: e?.selected });
    refresHandler();

    console.log(e);

  };
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAllPaginate",
      params: {
        page: pagination.page,
        limit: pagination.limit,
      },
    })
      .then((res) => {
        console.log(res.data.count);
        setData(res.data);
        setpagination({ ...pagination, totalproduct: res.data.count });
      })
      .catch((err) => console.log(err.message));
  },[refresh]);
  const updateHandler = (e) => {
    toggle();
    setProduct(e);
    UpdateHandler();
  };
  console.log(data);

  const deletHandler = (e) => {
    // if (confirm("are you sure") === true ) {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${e?._id}`,
      data: data,
    })
      .then((res) => {
        console.log(res);
        toast.success("delet succesfully");
        refresHandler();
      })
      .catch((err) => {
        toast.error("somthing wrong");
      });
    // // }
    // else{
    //   toast.warning("you are change your ducison")
    // }
  };


  return (
    <>
      <Table className="h-100 bg-black">
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COLOR</th>
            <th>SIZE</th>
            <th>Preview</th>
            <th>Update</th>
            <th>Delet</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1 + pagination.page * pagination.limit}</td>
                <td>
                  <img
                    style={{ height: "30px" }}
                    src={e?.thumbnail}
                    alt="ajkkj"
                  />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>
                  <div className="d-flex gap-2">
                    {e?.color.map((color, i) => {
                      return (
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            border: "1px solid black",
                            borderRadius: "50%",
                            backgroundColor: color,
                          }}
                          key={i}
                        ></div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    {sizeOptions.map((ee, i) => {
                      return (
                        <div
                          key={i}
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
                  <Button color="success" onClick={() => Preview(e)}>
                    Preview
                  </Button>
                </td>
                <td>
                  <Button color="warning" onClick={() => updateHandler(e)}>
                    Update
                  </Button>
                </td>
                <td>
                  <Button color="danger" onClick={() => deletHandler(e)}>
                    Delet
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ReactPaginate
        pageClassName="border border-dark h-25 w-6 text-center"
        nextLinkClassName="text-decoration-none   bg-blue-600 text-white px-3 py-1"
        previousLinkClassName="text-decoration-none bg-blue-600 text-white px-3 py-1"
        className="d-flex gap-3 items-center"
        breakLabel="..."
        nextLabel="next "
        onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pagination?.totalproduct / pagination?.limit}
        previousLabel=" previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
