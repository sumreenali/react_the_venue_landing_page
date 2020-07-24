import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28975.66008161452!2d67.04419883313031!3d24.796908431355746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cee4dd09493%3A0x780d79f26f44dd07!2sD.H.A%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500!5e0!3m2!1sen!2s!4v1595604944704!5m2!1sen!2s"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
