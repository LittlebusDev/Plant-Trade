import { Link, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { UploadPage } from "./pages/Upload-page";
import { Browse } from "./pages/Browse";
import { Edit } from "./pages/Edit";
import { Authentication } from "./pages/Signin-page";
// import { Account } from "./pages/Account";
import { DetailPage } from "./pages/DetailPage";
import CrudTest from "./pages/crud-test-page";

import ItemDetails from "./pages/item-details";


function App() {
  
  return ( 
    <>

  <Routes>
    <Route path="/" element={ <Landing/> } />
    <Route path="/upload" element={ <UploadPage/> }/>
    <Route path="/browse" element={ <Browse/> }/>
    {/* <Route path="/account" element={ <Account/> }/> */}
    <Route path="/details" element={ <DetailPage/> }/>
    <Route path="/edit" element={ <Edit/> }/>
    <Route path="/auth" element={ <Authentication/> }/>
    <Route path="/crudtest" element={ <CrudTest/> }/>
    <Route path="/details" element={ <ItemDetails/> }/>



  </Routes>
  </>
  )
}

export default App