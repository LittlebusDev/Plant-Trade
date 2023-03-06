import { useState } from "react";
import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Upload from "./Components/Upload";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Upload />
    </>
  );
}

export default App;
