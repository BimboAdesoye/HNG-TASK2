import logo from "../assets/tv.svg";
import Menu from "../assets/Menu.svg";
import SearchBar from "./SearchBar";
import "../styles/Navbar.css";

const Navbar = () => {


  return (
    <div className="navbar flex justify-between container">
      <div className="flex justify-center nav-logo">
        <img className="nav-logo-img" src={logo} alt="logo" />
        <p className="brand-name">MovieBox</p>
      </div>
      <SearchBar/>
      <div className="flex menu">
        <p className="sign-in">Sign in</p>
        <img className="menu-img" src={Menu} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
