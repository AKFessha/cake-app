import React from "react";
import "./Cake.css";

const Cake = props => {
  return (
    <div>
      <h3> {props.title} </h3>
      <p> {props.desc} </p>
      <img src={props.image} />
    </div>
  );
};
export default Cake;
