import { Link, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { UploadPage } from "./pages/Upload-page";
import { Browse } from "./pages/Browse";
import { Edit } from "./pages/Edit";
import { Authentication } from "./pages/Signin-page";
<<<<<<< HEAD
// import { Account } from "./pages/Account";
import { DetailPage } from "./pages/DetailPage";
=======
import { AccountPage } from "./pages/Account";
import  ItemDetails  from "./pages/item-details";
>>>>>>> 603714c22d1ed7efc4ea4aaa1ea4f65b573c79b3
import CrudTest from "./pages/crud-test-page";





function App() {
  
  return ( 
    <>

  <Routes>
    <Route path="/" element={ <Landing/> } />
    <Route path="/upload" element={ <UploadPage/> }/>
    <Route path="/browse" element={ <Browse/> }/>
<<<<<<< HEAD
    {/* <Route path="/account" element={ <Account/> }/> */}
    <Route path="/details" element={ <DetailPage/> }/>
=======
    <Route path="/account" element={ <AccountPage/> }/>
>>>>>>> 603714c22d1ed7efc4ea4aaa1ea4f65b573c79b3
    <Route path="/edit" element={ <Edit/> }/>
    <Route path="/auth" element={ <Authentication/> }/>
    <Route path="/crudtest" element={ <CrudTest/> }/>
    <Route path="/details" element={ <ItemDetails/> }/>



  </Routes>
  </>
  )
}

export default App