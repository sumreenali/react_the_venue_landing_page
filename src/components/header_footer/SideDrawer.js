import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List>
        <ListItem button onClick={() => console.log("Featured")}>
          {" "}
          Events starts in
        </ListItem>

        <ListItem button onClick={() => console.log("Venue NFO")}>
          {" "}
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => console.log("Highlights")}>
          {" "}
          Highlights
        </ListItem>

        <ListItem button onClick={() => console.log("Pricing")}>
          {" "}
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log("Location")}>
          {" "}
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
