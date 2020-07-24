import React from "react";
import { scroller } from "react-scroll";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({ open, onClose }) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List>
        <ListItem button onClick={() => scrollToElement("featured")}>
          {" "}
          Events starts in
        </ListItem>

        <ListItem button onClick={() => scrollToElement("venueNFO")}>
          {" "}
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => scrollToElement("highlights")}>
          {" "}
          Highlights
        </ListItem>

        <ListItem button onClick={() => scrollToElement("pricing")}>
          {" "}
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToElement("location")}>
          {" "}
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
