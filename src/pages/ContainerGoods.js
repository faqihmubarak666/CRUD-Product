import React, { Component } from "react";
import ListGoods from "./ListGoods";
import {
  getProduct,
  createProduct,
  getDetailProduct,
  updateProduct,
  deleteProduct,
} from "./ServiceApi";
import swal from "sweetalert";
import CreateGoods from "./CreateGoods";
import DetailGoods from "./DetailGoods";
import UpdateGoods from "./UpdateGoods";

class ContainerGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      detail: {},
      product_id: "",
      name: "",
      price: "",
      showModalCreate: false,
      showModalDetail: false,
      showModalUpdate: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  loadData = () => {
    getProduct().then((response) => {
      const dataProduct = response.data;
      console.log("data all", dataProduct);

      this.setState({ ...this.state, data: dataProduct });
    });
  };

  createNewProduct = () => {
    createProduct({
      name: this.state.name,
      price: this.state.price,
    })
      .then((response) => {
        if (this.state.name === "" || this.state.price === "") {
          swal("Create New Feature Failed !!!");
        } else if (response.status !== true) {
          swal("Create New Feature Failed !!!");
        } else {
          swal(
            "Create New Feature Success",
            "You clicked the button!",
            "success"
          );
          this.loadData();
          this.setState({
            ...this.state,
            name: "",
            price: "",
          });
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  handleModalCreate = () => {
    this.setState({
      showModalCreate: !this.state.showModalCreate,
    });
  };

  detailProduct = (id) => {
    getDetailProduct(id).then((response) => {
      const data = response;
      console.log("data id", data);
      this.setState({ ...this.state, detail: data });
    });
  };

  handleModalDetail = () => {
    this.setState({
      showModalDetail: !this.state.showModalDetail,
    });
  };

  updateNewProduct = (product_id, name, price) => {
    updateProduct({
      product_id:
        this.state.product_id === "" ? product_id : this.state.product_id,
      name: this.state.name === "" ? name : this.state.name,
      price: this.state.price === "" ? price : this.state.price,
    })
      .then((response) => {
        if (response.status === true) {
          swal("Update Feature Success", "You clicked the button!", "success");
          this.loadData();

          this.setState({
            ...this.state,
            product_id: "",
            name: "",
            price: "",
          });
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  handleModalUpate = () => {
    this.setState({
      showModalUpdate: !this.state.showModalUpdate,
    });
  };

  deleteDataProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        deleteProduct(id).then((response) => {
          if (response.status === true) {
            swal(
              "Delete Feature Success",
              "You clicked the button!",
              "success"
            );
            this.loadData();
          }
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  render() {
    return (
      <div>
        <ListGoods
          data={this.state.data}
          handleModalCreate={this.handleModalCreate}
          handleModalDetail={this.handleModalDetail}
          handleModalUpate={this.handleModalUpate}
          detailProduct={this.detailProduct}
          deleteDataProduct={this.deleteDataProduct}
        />
        <CreateGoods
          name={this.state.name}
          price={this.state.price}
          showModalCreate={this.state.showModalCreate}
          createNewProduct={this.createNewProduct}
          handleModalCreate={this.handleModalCreate}
          handleChangeInput={this.handleChangeInput}
        />

        <DetailGoods
          detail={this.state.detail}
          showModalDetail={this.state.showModalDetail}
          handleModalDetail={this.handleModalDetail}
        />

        <UpdateGoods
          product_id={this.product_id}
          name={this.state.name}
          price={this.state.price}
          showModalUpdate={this.state.showModalUpdate}
          updateNewProduct={this.updateNewProduct}
          handleModalUpate={this.handleModalUpate}
          handleChangeInput={this.handleChangeInput}
        />
      </div>
    );
  }
}

export default ContainerGoods;
