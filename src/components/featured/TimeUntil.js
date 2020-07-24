import React, { Component } from "react";
import Slide from "react-reveal";

class TimeUntil extends Component {
  state = {
    deadline: "Dec 20, 2020",
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  };

  getTimeUntil = () => {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());
    if (time < 0) console.log("time passed");
    else {
      const sec = Math.floor((time / 1000) % 60);
      const min = Math.floor((time / 1000 / 60) % 60);
      const hrs = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hrs,
        min,
        sec,
      });
    }
  };
  componentDidMount() {
    setInterval(() => this.getTimeUntil(), 1000);
  }
  render() {
    const { days, hrs, min, sec } = this.state;
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts In</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{hrs}</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{min}</div>
              <div className="countdown_tag">Mins</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{sec}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;
