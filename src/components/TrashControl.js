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
      buyFormVisibleOnPage: false,
      mainTrashList: []
    };
    // this.handleSellClick = this.HandleSellClick.bind(this);
    // this.handleBuyClick = this.HandleBuyClick.bind(this);
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

  handleSellingNewTrash = (newTrash) => {
    const newMainTrashList = this.state.mainTrashList.concat(newTrash);
    this.setState({mainTrashList: newMainTrashList,
      sellFormVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buyTrashButtonText = null;
    let sellTrashButtonText = null;
    if (this.state.sellFormVisibleOnPage) {
      currentlyVisibleState = <SellTrashForm onNewTrashSale={this.handleSellingNewTrash} />;
      sellTrashButtonText = "Home";
      buyTrashButtonText = "Buy";
    } else if (this.state.buyFormVisibleOnPage) {
      currentlyVisibleState = <TrashList trashList={this.state.mainTrashList} />;
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