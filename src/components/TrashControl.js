import React from "react";
import BuyTrashForm from "./BuyTrashForm";
import SellTrashForm from "./SellTrashForm";
import Splash from "./Splash";
import TrashList from "./TrashList";

class TrashControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sellFormVisibleOnPage: false,
      buyFormVisibleOnPage: false
    };
  }

  handleSellClick = () => {
    this.setState(prevState => ({
      sellFormVisibleOnPage: !prevState.sellFormVisibleOnPage
    }));
  }

  handleBuyClick = () => {
    this.setState(prevState => ({
      buyFormVisibleOnPage: !prevState.buyFormVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buyTrashButtonText = null;
    let sellTrashButtonText = null;
    if (this.state.sellFormVisibleOnPage) {
      currentlyVisibleState = <SellTrashForm />;
      sellTrashButtonText = "Home";
      buyTrashButtonText = "Buy";
    } else if (this.state.buyFormVisibleOnPage) {
      currentlyVisibleState = <BuyTrashForm />;
      sellTrashButtonText = "Sell";
      buyTrashButtonText = "Home";
    } else {
      currentlyVisibleState = <Splash />
      sellTrashButtonText = "Sell";
      buyTrashButtonText = "Buy";
    }
    return (
      <>
      {currentlyVisibleState}
      <button onClick={this.handleBuyClick}>{buyTrashButtonText}</button>
      <button onClick={this.handleSellClick}>{sellTrashButtonText}</button>
      </>
    );
  }
}

export default TrashControl;