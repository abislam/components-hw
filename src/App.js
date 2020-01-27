import React from 'react';

import NavBar from "./components/NavBar";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Box1/>
      <Box2 name={"Abed"} age={23} color={"Blue"}/>
      <Box2 name={"Andy"} age={25} color={"Magenta"}/>
      <Box2 name={"Alfred"} age={45} color={"Black"}/>
    </div>

  );
}

export default App;
