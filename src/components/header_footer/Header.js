import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { colors } from "../../config/colors";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShown: false,
  };

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value,
    });
  };

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShown: true,
      });
    } else {
      this.setState({
        headerShown: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { drawerOpen, headerShown } = this.state;
    return (
      <AppBar
        position="fixed"
        style={{
          background: headerShown ? colors.dark : "transparent",
          backgroundOrigin: "center",
          boxShadow: "none",
          padding: headerShown ? "10px 0px" : "16px 0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Muscial Event</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
