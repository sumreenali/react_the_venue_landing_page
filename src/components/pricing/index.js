import React, { Component } from "react";
import AppButton from "../utils/AppButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 350],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    ],
    linkTo: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span style={{ fontWeight: "400" }}>
                {this.state.position[i]}
              </span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <AppButton
                title="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2> Pricing </h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
