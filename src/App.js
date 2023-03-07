import { useState, useEffect } from "react";
import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SearchBar from "./Components/SearchBar";
import MessageBubble from "./Components/MessageBubble";
import Discussion from "./Components/Discussion";
import ListingDetails from "./Components/ListingDetails";
import Upload from "./Components/Upload";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Divider from "./Components/Divider";
import Card from "./Components/Card";
import ViewAllListings from "./Components/ViewAllListings";
import Signin from "../src/Components/Signin";
import AccountPage from "./Pages/Account";
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DetailPage/>
      <AccountPage/>
    </>
  );
}

export default App;
