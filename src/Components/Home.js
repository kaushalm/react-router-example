import React from "react";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      nname: "Kaushal Home"
    };
  }

  render() {
    let mystyle = {
      fontFamily: "Arial"
    };
    const name = this.state.name;
    return <div style={mystyle}>Home {name}</div>;
  }
}
