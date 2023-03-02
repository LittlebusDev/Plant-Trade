import './Styles/App.scss';
import Navbar from './Components/Navbar';
import { Signin } from "../src/Components/Signin";
import { Register } from "../src/Components/Register";

function App() {
  return ( 
  <>
  <Navbar /> 
  <Signin/>
  <Register/>

  </>)
}

export default App;