import { useState } from "react";
import './Styles/App.scss';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SearchBar from '../Components/SearchBar';
import ListingDetails from '../Components/ListingDetails';
import Categories from "../Components/Categories";
import Divider from "../Components/Divider";
import ViewAllListings from "../Components/ViewAllListings";


function App() {
  
  return ( 
  <>
  <Navbar />
  <ViewAllListings/>
  <SearchBar />
  <Categories/>
  <Divider/>
  <ListingDetails/>
  <Divider/>
  <ListingDetails/>
  <Divider/>
  <ListingDetails/>
  <Divider/>
  <ListingDetails/>
  <Divider/>
  <ListingDetails/>
  <Divider/>
  <ListingDetails/>
  <Divider/>

  </>
  )
}

export default App;