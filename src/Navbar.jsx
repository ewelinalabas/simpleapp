import React from "react";

class Navbar extends React.Component {
  render() {
    const ulStyle = {
      listStyleType: "none",
      margin: 0,
      padding: 0
    };

    const liStyle = {
      display: "inline-block",
      width: "60px",
      float: "left"
    };

    return (
      <div>
        <ul style={ulStyle}>
          <li style={liStyle}>Home</li>
          <li style={liStyle}>News</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
