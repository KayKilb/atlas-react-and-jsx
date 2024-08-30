import React from "react";
import Greeting from "./components/Greeting";
import SocialLinks from "./components/SocialLinks";
import Header from "./components/Header";

function App() {
  // return <div className="app">Hello Atlas</div>;
  return <div className="App">
    <Greeting />
    <SocialLinks />
    <Header />
  </div>
}

export default App;
