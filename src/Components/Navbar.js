import "../Styles/Pages.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/Landing">
        {" "}
        <img src={require("../Images/Logo.png")} />
      </a>
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
    </nav>
  );
};

export default Navbar;
