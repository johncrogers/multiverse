// This is the client index.
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class Multiverse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Welcome to Multiverse."
    };
  }
  componentDidMount() {}
  render() {
    return <h1>{this.state.greeting}</h1>;
  }
}

ReactDOM.render(<Multiverse />, document.getElementById("app"));
