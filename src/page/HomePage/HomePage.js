import axios from "axios";
import React, { Component } from "react";

export default class HomePage extends Component {
  state = {
    userList: [],
  };
  componentDidMount() {
    // gọi api lấy danh sách ng dùng
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODY0NjQwMDAwMCIsIm5iZiI6MTY4MDM2ODQwMCwiZXhwIjoxNzA4Nzk0MDAwfQ.m054V9MFrBY26j2t-FxqIXGcOVQim2UUk_G-OoewJUY",
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          userList: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderUserList = () => {
    return this.state.userList.map(({ hoTen, maLoaiNguoiDung }, key) => {
      return (
        <strong
          className={`col-2   ${
            maLoaiNguoiDung == "KhachHang" ? "text-success" : "text-danger"
          }`}
          key={key}
        >
          {hoTen.length > 20 ? hoTen.slice(0, 20) + "..." : hoTen}
        </strong>
      );
    });
  };
  render() {
    return <div className="row">{this.renderUserList()}</div>;
  }
}
