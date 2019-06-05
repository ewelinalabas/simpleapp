import React from "react";
import NoteInput from "./NoteInput";
import Note from "./Note";

class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      allNotes: ["ala", "ma", "kota"]
    };
  }

  handleSubmit = note => {
    const notes = this.state.allNotes;
    console.log(note);
    notes.push(note);
    this.setState({ allNotes: notes });
  };

  render() {
    return (
      <div>
        <NoteInput onSubmit={this.handleSubmit.bind(this)} />
        {console.log(this.state.allNotes)}
        <ul>
          {this.state.allNotes.forEach(el => (
            <Note el={el} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Notes;
