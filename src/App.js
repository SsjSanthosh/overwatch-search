import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div className="App">
      <Search />
      <Profile />
    </div>
  );
}

export default App;
