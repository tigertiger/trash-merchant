import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function SellTrashForm(props){
  
  function handleSellTrashFormSubmission(event) {
    event.preventDefault();
    props.onNewTrashSale({what: event.target.what.value, details:event.target.details.value, quantity: event.target.quantity.value, id:v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSellTrashFormSubmission}>
        <input
          type='text'
          name='what'
          placeholder='what is it?' />
        <input
          type='text'
          name='details'
          placeholder='whats it like?' />
        <input
          type='number'
          name='quantity'
          placeholder='how many you got?' />
        <button type='submit'>Sell this S#*t</button>
      </form>
    </React.Fragment>
  );
}

SellTrashForm.propTypes = {
  onNewTrashSale: PropTypes.func
};

export default SellTrashForm;