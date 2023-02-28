import logo from "../Assets/Logo.png"

const Navbar = () => {
  return (
     
     <nav className="nav">
        <a href="/Homepage"> <img src={logo}/>
        PLANTRADE</a>
      <ul>
          <li> <a href="/Notifications">Notifications <img src=".Notifications.png"/></a></li>
          <li> <a href="/Profile">Profile</a></li>
      </ul>
     </nav> 
    )
  }
  
  export default Navbar
  