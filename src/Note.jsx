import React from "react";

class Note extends React.Component {
  render() {
    return <li>{this.props.el}</li>;
  }
}

export default Note;
