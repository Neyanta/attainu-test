import React from "react";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleChange = event => {
    fetch(`http://localhost:5000/airports/${event.target.value}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };
  render() {
    const citiList = this.props.data.map(data => {
      return <option>{data}</option>;
    });

    const { data } = this.state;
    data.length
      ? alert(`airport: ${data[0].airport_name} IATA Code:${data[0].IATA_code}`)
      : console.log("loading");

    return <select onChange={this.handleChange}>{citiList}</select>;
  }
}

export default Cities;
