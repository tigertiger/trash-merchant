import React from "react";
import PropTypes from "prop-types";

function Trashlet(props){
  return(
    <>
    <div className="card">
      <h3>{props.what}</h3>
      <p>{props.details}</p>
      <p>{props.quantity}</p>
    </div>
    </>
  );
}

Trashlet.propTypes = {
  what: PropTypes.string,
  details: PropTypes.string,
  quantity: PropTypes.number
}

export default Trashlet;