import React from "react";
import { v4 } from 'uuid';

function BuyTrashForm(props){
  function handleBuyTrashFormSubmission(event) {
    event.preventDefault();
    alert("it works");
  }

  return (
    <React.Fragment>
      <form onSubmit={handleBuyTrashFormSubmission}>
        <input
          type='text'
          name='what'
          placeholder='what is it?' />
        <input
          type='number'
          name='quantity'
          placeholder='how many you want?' />
        <button type='submit'>Buy this S#*t</button>
      </form>
    </React.Fragment>
  );
}

export default BuyTrashForm;