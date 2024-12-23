import { useState } from "react";
import Logo from '../assert/Images/dogoprimeface.png'
import Hamburger from "./Hamburger";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img width={'30px'} src={Logo} alt="navlogo" />
            $DOGEPRIME
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <a href='/' > Home </a>
              </li>
              <li>
              <a href='#buy' > Buy </a>
              </li>
              <li>
                <a href="#primenomic">Primenomic</a>
              </li>
              <li>
              <a href='#about' > About </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;