import React from "react";
import Trashlet from "./Trashlet";

const mainTrashList = [
  {
    what: "Old Shoe",
    details: "Found in river; missing sole; soggy.",
    quantity: 1
  },
  {
    what: "Plastic bag",
    details: "various sizes, colors, & conditions",
    quantity: 30
  },
  {
    what: "Rusty blade",
    details: "still useful",
    quantity: 2
  },
]

function TrashList(){
  return (
    <div id="trashGrid">
    {mainTrashList.map((trashlet, index) =>
    <Trashlet what={trashlet.what}
    details={trashlet.details}
    quantity={trashlet.quantity}
    key={index} />
    )}
    </div>
  );
}

export default TrashList;