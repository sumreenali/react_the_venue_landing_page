import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import AppButton from "../utils/AppButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  getPercentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.getPercentage();
    }, 40);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.getPercentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right duration={500}>
            <div className="discount_description">
              <h3 style={{ fontWeight: "600" }}>
                Purchase tickets before 30th September
              </h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.{" "}
              </p>
              <div>
                <AppButton
                  title="Purchase tickets"
                  bck="#ffa800"
                  color="#ffffff"
                  link="http://google.com"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
