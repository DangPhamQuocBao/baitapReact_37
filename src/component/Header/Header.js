import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="pb-5 border-bottom ">
        <NavLink className="mx-3 btn btn-warning" to="/">
          Home
        </NavLink>
        <NavLink className="mx-3 btn btn-warning" to="/login">
          Login
        </NavLink>
        <NavLink className="mx-3 btn btn-warning" to="/life-cycle">
          Life Cycle
        </NavLink>
        <NavLink className="mx-3 btn btn-warning" to="/users">
          Users
        </NavLink>
      </div>
    );
  }
}
