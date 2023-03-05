import '../Styles/DetailPage.scss';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const Navbar = () => {
  return (
     
     <nav className="nav">
        <a href="/Homepage"> <img src={ require('../Images/Logo.png')}/></a>
        <div class="buttons">
        <SecondaryButton label = 'Log In'/>
        <PrimaryButton label = 'Sign Up'/>
        </div>
        {/*}
      <ul>
      <li> 
            <a className="primary-btn" href="/sign-up">
              sign up
              </a>
              </li>
          <li> 
            <a className="secondary-btn" href="/login">
              login
              </a>
              </li>
      </ul>
  */}
     </nav> 
    )
  }
  
  export default Navbar
  