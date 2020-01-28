import OnlyComponent from "./component/OnlyComponent";
import './App.css';
import React from 'react';
import nav from "./component/nav";

function App() {

  return(
      <div className="App">
          <nav/>
        <OnlyComponent name={"Kalista"}/>
      </div>
  );
}

export default App;
