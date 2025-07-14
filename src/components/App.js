import React from "react";
import Navbar from "./Navbar"; // ✅ Case-sensitive and uses relative path

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
