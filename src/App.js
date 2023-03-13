import { Link, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { UploadPage } from "./pages/Upload-page";
import { Browse } from "./pages/Browse";
import { Edit } from "./pages/Edit";
import { Authentication } from "./pages/Signin-page";
import CrudTest from "./pages/crud-test-page";



function App() {
  
  return ( 
    <>

  <nav> 
    <ul>
      <li> 
        <Link to="/upload"></Link>
      </li>
    </ul>
    </nav>
  <Routes>
    <Route path="/" element={ <Landing/> } />
    <Route path="/upload" element={ <UploadPage/> }/>
    <Route path="/browse" element={ <Browse/> }/>
    <Route path="/edit" element={ <Edit/> }/>
    <Route path="/auth" element={ <Authentication/> }/>
    <Route path="/crudtest" element={ <CrudTest/> }/>
  </Routes>
  </>
  )
}

export default App