import "../Styles/Pages.scss";
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import SearchBar from '../Components/SearchBar';
import Featured from "../Components/Featured";
import Card from "../Components/Card";
import "../Styles/LandingPage.scss";

 


export function Landing() {
  
  return (
  <>
  <Navbar />
  <Hero/>
  <SearchBar />
  <Featured/>
  <div className='feature-cards' >
   <Card/> 
   <Card/> 
   <Card/> 
  </div>
 


  </>
  )
}