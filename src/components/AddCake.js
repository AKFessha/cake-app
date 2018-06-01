import React from "react";

class AddCake extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: ""
    };
  }

  handleInput = (type, e) => {
    e.preventDefault();
    const newState = {};
    newState[type] = e.target.value;
    this.setState(newState);
  };

  onClick = e => {
    e.preventDefault();
    this.props.addCake(this.state.title, this.state.desc);
  };
  render() {
    return (
      <div>
        <p> Add a new Cake</p>

        <label>Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title..."
          onChange={event => this.handleInput("title", event)}
        />

        <label> Description: </label>
        <input
          type="text"
          id="desc"
          placeholder="Description.."
          onChange={event => this.handleInput("desc", event)}
        />
        <button onClick={this.onClick} type="submit">
          Add cake
        </button>
      </div>
    );
  }
}
export default AddCake;
