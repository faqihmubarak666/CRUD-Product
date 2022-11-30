import React from "react";
import { Table, Button } from "react-bootstrap/cjs";

const ListGoods = (props) => {
  const {
    data,
    handleModalCreate,
    handleModalDetail,
    detailProduct,
    handleModalUpate,
    deleteDataProduct,
  } = props;
  return (
    <div style={{ padding: "20px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td colSpan={3}>
              <h1 className="text-center">List Product</h1>
            </td>
          </tr>
          <tr className="text-center">
            <th>
              <Button onClick={() => handleModalCreate()}>Add</Button>
            </th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => (
            <tr className="text-center">
              <td style={{ width: "350px" }}>
                <Button
                  style={{ marginRight: "5px" }}
                  onClick={() => {
                    handleModalDetail();
                    detailProduct();
                  }}
                >
                  Detail
                </Button>
                <Button
                  style={{ marginRight: "5px" }}
                  onClick={() => handleModalUpate()}
                >
                  Edit
                </Button>
                <Button
                  style={{ marginRight: "5px" }}
                  onClick={() => deleteDataProduct(data.id)}
                >
                  Delete
                </Button>
              </td>
              <td>{res.name}</td>
              <td>{res.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListGoods;
