import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CardList from "./components/Cards/CardList";

// import { Navbar, Header, CardList } from "./components/index";
// bu şekilde hepsini tek satırda import edebiliriz,ancak default olmadan export yapılmalı export{Navbar} şeklinde

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CardList />
    </div>
  );
};
export default App;
