import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";

const AppButton = ({ title, bck, color, link }) => {
  console.log(title, bck, color, link);
  return (
    <Button
      href={link}
      variant="container"
      size="small"
      style={{
        backgroundColor: bck,
        color: color,
      }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {title}
    </Button>
  );
};

export default AppButton;
