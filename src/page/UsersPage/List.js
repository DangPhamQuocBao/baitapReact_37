import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_USER } from "../../redux/constant/user";
import { setUserAction } from "../../redux/action/user";
import { message } from "antd";
class List extends Component {
  componentDidMount() {
    this.props.handleSetUser();
  }
  handleRenderTable = () => {
    return this.props.users.reverse().map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.account}</td>
          <td>{user.password}</td>
          <td>
            <button
              onClick={() => {
                this.handleDelelte(user.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.handleGetDetail(user.id);
              }}
              className="btn btn-info"
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  handleDelelte = (id) => {
    axios
      .delete(`https://64e1f45bab0037358818889f.mockapi.io/user/${id}`)
      .then((res) => {
        console.log(res);
        message.success("xoá thành công");
        this.props.handleSetUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleGetDetail = (id) => {
    axios
      .get(`https://64e1f45bab0037358818889f.mockapi.io/user/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Accout</th>
              <th>password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.handleRenderTable()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: () => {
      dispatch(setUserAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
