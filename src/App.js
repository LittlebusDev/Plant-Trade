import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { Upload } from "./pages/Upload";
import { Browse } from "./pages/Browse";

function App() {
  
  return ( 
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/books" element={ <Books/> }/>
    <Route path="/landing" element={ <Landing/> }/>
    <Route path="/upload" element={ <Upload/> }/>
    <Route path="/browse" element={ <Browse/> }/>
  </Routes>
  )
}

export default App



