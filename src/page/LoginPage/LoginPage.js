import { message } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class LoginPage extends Component {
  state = {
    username: "",
    password: "",
  };
  componentDidMount() {
    // tự động được gọi khi user load trang`
    // focus vào thẻ input username
    console.log("yes didmount");
  }
  handleOnchangeForm = (event) => {
    console.log("😀 - LoginPage - event", event.target.name);
    let { value, name } = event.target;
    console.log("😀 - LoginPage - value, name", value, name);

    this.setState({ [name]: value });
  };
  handleLogin = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.username,
        matKhau: this.state.password,
        // antd npm
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    })
      .then((res) => {
        message.success("Đăng nhập thành công");
        console.log(res);
        // chuyển hướng user về trang chủ sau khi load thành công
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
        console.log(err);
      });
    console.log("yes login");
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              onChange={this.handleOnchangeForm}
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleOnchangeForm}
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              name="password"
            />
          </div>
          <button
            type="button"
            onClick={this.handleLogin}
            className="btn btn-danger"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

let user = {
  name: "alice",
  age: 3,
};

// user.name = "tommy";

let key = "age";
user[key] = 5;
