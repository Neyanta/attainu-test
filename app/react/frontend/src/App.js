import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cities from "./components/Cities";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCities: true,
      data: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/cities")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const data = this.state;
    console.log(data);
    return <Cities data={this.state.data} />;
  }
}

export default App;
