import React, { Component } from "react";

import "./servicess.scss";

class Servicess extends Component {
  render() {
    return (
      <div className="servicess">
        <img className="navbar__navLogo" src={this.props.img} alt="" />
        <div>
          <h1>{this.props.title}</h1>
          <h4>{this.props.description}</h4>
        </div>
      </div>
    );
  }
}

export default Servicess;
