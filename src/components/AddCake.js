import React from "react";

class AddCake extends React.Component {
  render() {
    return (
      <div>
        <p> Add a new Cake</p>

        <label>Title: </label>
        <input type="text" id="title" name="title" placeholder="Title..." />

        <label> Description: </label>
        <input type="text" id="desc" placeholder="Description.." />
        <button> Submit </button>
      </div>
    );
  }
}
export default AddCake;
