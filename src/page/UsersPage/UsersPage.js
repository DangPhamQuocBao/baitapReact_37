import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class UsersPage extends Component {
  /**
   * xử lý 5 api: lấy danh sách,thêm người dùng, xoá người dùng,cập nhật, lấy chi tiết theo id
   */
  render() {
    return (
      <div className="container">
        <Form />
        <List />
      </div>
    );
  }
}
