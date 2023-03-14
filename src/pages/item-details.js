import "../Styles/Pages.scss";
import Navbar from '../Components/Navbar';
import Featured from "../Components/Featured";
import Card from "../Components/Card";
import ListingDetails from "../Components/ListingDetails";
import Divider from "../Components/Divider";
import Discussion from "../Components/Discussion";

function ItemDetails() {
  
  return (
  <>
  <Navbar />
  <ListingDetails title="Monstera" species="Chinese Evergreens" price= "$50" details="This plant is beautiful!"/>
  <Divider/>

<Discussion/>
  </>
  )
}
export default ItemDetails