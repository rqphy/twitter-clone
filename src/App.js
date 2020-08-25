import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import Feed from "./Components/Feed.js";
import Widgets from "./Components/Widgets.js";

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
