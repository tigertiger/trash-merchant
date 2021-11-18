import React from "react";
import Trashlet from "./Trashlet";
import PropTypes from "prop-types";

function TrashList(props){
  return (
    <div id="trashGrid">
    {props.trashList.map((trashlet) =>
    <Trashlet what={trashlet.what}
    details={trashlet.details}
    quantity={trashlet.quantity}
    id={trashlet.id}
    key={trashlet.id} />
    )}
    </div>
  );
}

TrashList.propTypes = {
  trashList: PropTypes.array
};

export default TrashList;