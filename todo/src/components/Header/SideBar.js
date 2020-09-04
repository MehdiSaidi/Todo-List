import React from "react";
import "./../../styles.css";

class SideBar extends React.Component {
  render() {
    let style;

    return (
      <div
        id="mySidebar"
        className="sidebar"
        style={
          (style = {
            width: this.props.width,
          })
        }
      >
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

export default SideBar;
