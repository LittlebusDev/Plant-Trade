import { useState } from "react";
import './Styles/App.scss';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SearchBar from '../Components/SearchBar';
import Featured from "../Components/Featured";
import Card from "../Components/Card";
 


function App() {
  
  return ( 
  <>
  <Navbar />
  <Hero/>
  <SearchBar />
  <Featured/>
  <Card/>
  <Card/>
  <Card/>
  

  </>
  )
}

export default App;