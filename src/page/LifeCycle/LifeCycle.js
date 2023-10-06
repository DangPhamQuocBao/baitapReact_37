import React, { Component } from "react";
import Footer from "./Footer";

export default class LifeCycle extends Component {
  state = {
    number: 1,
  };
  handleIncrease = () => this.setState({ number: this.state.number + 1 });
  handleDecrease = () => this.setState({ number: this.state.number - 1 });
  componentDidMount() {
    // chỉ được chạy 1 lần duy nhất
    // thường được dùng để gọi api
    var timmer = 600;
    this.myCountDown = setInterval(() => {
      // console.log("count down", timmer--);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myCountDown);
    console.log("yes unmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "😀 - LifeCycle - shouldComponentUpdate - nextProps,nextState",
      nextProps,
      nextState
    );
    if (nextState.number == 5) {
      return false;
    }
    return true;
  }
  componentDidUpdate(prevProp) {
    console.log("😀 - LifeCycle - componentDidUpdate - prevProp, ", prevProp);
    console.log("yes did update");
  }
  render() {
    console.log("yes render");
    return (
      <div className="text-center pt-5">
        <button onClick={this.handleDecrease} className="btn btn-danger">
          -
        </button>
        <strong className="mx-5">{this.state.number}</strong>
        <button onClick={this.handleIncrease} className="btn btn-warning">
          +
        </button>
        <Footer />
      </div>
    );
  }
}
