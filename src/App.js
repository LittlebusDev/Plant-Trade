import { useState } from "react";
import './Styles/App.scss';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SearchBar from './Components/SearchBar';
import MessageBubble from './Components/MessageBubble';
import Discussion from './Components/Discussion';
import ListingDetails from './Components/ListingDetails';
import Footer from "./Components/Footer";
import AccountPage from "./Pages/Account";
import DetailPage from "./Pages/DetailPage";

// signin/signup components
// import { Signin } from "../src/Components/Signin";
// import { Register } from "../src/Components/Register";

function App() {
  
  return ( 
  <>
  <Navbar />
  <Hero />
  <Footer/>
  </>
  )
}

export default App;



