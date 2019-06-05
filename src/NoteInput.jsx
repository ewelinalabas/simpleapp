import React from "react";

class NoteInput extends React.Component {
  render() {
    return (
      <form>
        <input placeholder={"input your text here"} />
        <input
          type="submit"
          value="Add note"
          onSubmit={event => this.props.handleSubmit(event.target.value)}
        />
      </form>
    );
  }
}

export default NoteInput;
