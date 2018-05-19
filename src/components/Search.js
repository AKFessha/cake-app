import React from "react";
const Search = props => {
  return (
    <div>
      <h2>This are the list of cakes for now </h2>
      <span> Search cake by name: </span>
      <input type="text" placeholder="Search......" onChange={props.onChange} />
    </div>
  );
};
export default Search;
