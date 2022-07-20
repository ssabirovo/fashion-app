import React, { Component } from "react";
import Servicess from "../servicess/servicess";

import truck from "../../assets/images/services-truck.png";
import phone from "../../assets/images/services-phone.png";
import tick from "../../assets/images/service-tick.png";

import "./thisMonth.scss";

export class ThisMonth extends Component {
  render() {
    return (
      <div className="thisMonth">
        <div className="thisMonth__servicess">
          <Servicess
            img={truck}
            title="Fast & Free Delivery"
            description="Free delivery for all orders over $140"
          />
          <Servicess
            img={phone}
            title="24/7 Customer Support"
            description="friendly 24/7 customer support"
          />
          <Servicess
            img={tick}
            title="Money Back Guarantee"
            description="We return money within 30 days"
          />
        </div>
      </div>
    );
  }
}

export default ThisMonth;
