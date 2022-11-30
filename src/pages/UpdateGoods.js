import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const UpdateGoods = (props) => {
  const {
    product_id,
    name,
    price,
    updateNewProduct,
    showModalUpdate,
    handleModalUpdate,
    handleChangeInput,
  } = props;
  return (
    <div>
      <Modal show={showModalUpdate}>
        <Modal.Body>
          <Modal.Header closeButton onClick={() => handleModalUpdate()}>
            <Modal.Title id="contained-modal-title-vcenter">
              UPDATE PRODUCT
            </Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Id Product</Form.Label>
              <Form.Control
                defaultValue={product_id}
                type="text"
                name="product_id"
                placeholder="Id product"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Name Product</Form.Label>
              <Form.Control
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Name product"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Price Product</Form.Label>
              <Form.Control
                defaultValue={price}
                type="text"
                name="price"
                placeholder="Price product"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              updateNewProduct();
              handleModalUpdate();
            }}
            style={{ backgroundColor: "#0ac1a5" }}
            disabled={name === "" || price === "" ? true : false}
          >
            Add
          </Button>
          <Button
            onClick={() => handleModalUpdate()}
            style={{ backgroundColor: "#0ac1a5" }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateGoods;
