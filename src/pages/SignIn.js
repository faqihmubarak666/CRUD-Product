import React, { Component } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { getLogintService } from "./ServiceApi";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: false,
      email: "",
      password: "",
      massageError: "",
      usernameError: "",
      passwordError: "",
    };
  }

  handleHidePassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
    });
  };

  handleLogin = () => {
    const { navigation } = this.props;

    if (this.state.email === "" && this.state.password === "") {
      this.setState({
        massageError:
          "Silahkan masukan Email dan Kata Sandi yang sudah terdaftar ini untuk masuk.",
        usernameError: "Email yang anda masukan salah",
        passwordError: "Password yang anda masukan salah",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else {
      getLogintService({
        email: this.state.email,
        password: this.state.password,
      })
        .then((response) => {
          if (response.status === true) {
            sessionStorage.setItem("token", response.data.token);
            navigation("/list");

            swal("Login Success", "You clicked the button!", "success");
          } else {
            swal("Login Invalid4", "You clicked the button!", "error");
          }
        })
        .catch((err) => {
          swal("Login Invalid5", "You clicked the button!", "error");
        });
    }
  };

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  render() {
    return (
      <div
        style={{
          paddingTop: "10px",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        <div>
          <h1 style={{ color: "#87CEFA", fontSize: "70px" }}>Login</h1>
        </div>
        <Form>
          <p style={{ textAlign: "center", color: "red", paddingTop: "20px" }}>
            {this.state.massageError}
          </p>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ paddingTop: "20px" }}
          >
            <Form.Label style={{ fontWeight: "Bold" }}>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={this.state.email}
              placeholder="email"
              onChange={(event) => this.handleChangeInput(event)}
            />
            <Form.Text style={{ color: "red" }}>
              {this.state.usernameError}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "Bold" }}>Password</Form.Label>
            <InputGroup>
              <Form.Control
                name="password"
                placeholder="Password"
                value={this.state.password}
                type={this.state.hidePassword ? "text" : "password"}
                onChange={(event) => this.handleChangeInput(event)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => this.handleHidePassword()}
              >
                {this.state.hidePassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </Button>
            </InputGroup>
            <Form.Text style={{ color: "red" }}>
              {this.state.passwordError}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <p style={{ color: "#87CEFA", textAlign: "right" }}>
              Lupa kata sandi ?
            </p>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              size="lg"
              style={{ backgroundColor: "#87CEFA" }}
              onClick={() => this.handleLogin()}
            >
              Masuk
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();
  return <SignIn {...props} navigation={navigation} />;
}
