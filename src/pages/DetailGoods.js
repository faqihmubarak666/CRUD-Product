import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const DetailGoods = (props) => {
  const { detail, showModalDetail, handleModalDetail } = props;
  return (
    <div>
      <Modal show={showModalDetail}>
        <Modal.Body>
          <Modal.Header closeButton onClick={() => handleModalDetail()}>
            <Modal.Title id="contained-modal-title-vcenter">
              DETAIL PRODUCT
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Name Product</Form.Label>
              <Form.Control
                // value={name}
                type="text"
                name={detail.name}
                placeholder="Name product"
              />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>Price Product</Form.Label>
              <Form.Control
                // value={price}
                type="text"
                name={detail.price}
                placeholder="Price product"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => handleModalDetail()}
            style={{ backgroundColor: "#0ac1a5" }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailGoods;
