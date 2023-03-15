import "../Styles/Components.scss";
import Navbar from "../Components/Navbar";
import ListingDetails from "../Components/ListingDetails";
import Divider from "../Components/Divider";
import Discussion from "../Components/Discussion";
import Footer from "../Components/Footer";




function ItemDetails() {
  return (
    <>
      <Navbar />
      <ListingDetails
        title="Aglaonema"
        species="Chinese Evergreens"
        price="$50"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      {/* <SellerListing UserName = 'luv2sell88' label='see all listings'/> */}

      <Divider />

      <Discussion />

      <Footer/>
    </>
  );
}
export default ItemDetails;
