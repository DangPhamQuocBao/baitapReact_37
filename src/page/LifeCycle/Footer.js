import React, { Component, PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    console.log("footer render");
    return <div className="p-5 bg-dark text-white">Footer</div>;
  }
}
