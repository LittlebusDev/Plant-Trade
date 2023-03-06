import { useState } from "react";
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import ListingDetails from '../Components/ListingDetails';
import Categories from "../Components/Categories";
import Divider from "../Components/Divider";
import ViewAllListings from "../Components/ViewAllListings";


export function Browse() {
  
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