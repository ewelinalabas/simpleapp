import React from "react";

class Navbar extends React.Component {
  render() {
    const ulStyle = {
      "list-style-type": "none"
    };
    return (
      <div>
        <ul style={ulStyle}>
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
