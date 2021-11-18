import React from "react";
import Header from "./Header";
import TrashList from "./TrashList";
import TrashControl from "./TrashControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <TrashList />
      <TrashControl />
    </React.Fragment>
  );
}

export default App;