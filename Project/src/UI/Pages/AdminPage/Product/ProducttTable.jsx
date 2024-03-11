import React from 'react'

export default function ProducttTable() {
    
  return (
    <Table striped>
    <thead>
      <tr>
        <th>SR.</th>
        <th>IMAGE</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th>COLOR</th>
        <th>SIZE</th>
      </tr>
    </thead>
    <tbody>
      {allProduct?.map?.((e, i) => {
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
                {[41, 42, 43, 44, 45].map((size) => {
                  return (
                    <div
                      style={{ padding: "5px", border: "1px solid black" }}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </td>
            <td>
              <Edit
                role="button"
                color="#81adef"
                onClick={() => editHandler(e)}
              />
              <Trash
                role="button"
                color="#f22b2b"
                onClick={() => deleteHandler(e?._id)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
  )
}
