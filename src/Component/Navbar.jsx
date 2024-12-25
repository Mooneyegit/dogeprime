import Logo from '../assert/Images/dogoprimeface.png'
import { Link } from "react-router";

const Navbar = () => { 
    return (
      <nav className="navbar">
        <div className="container">
          <Link to='/'>
          <div className="logo">
            <img width={'30px'} src={Logo} alt="navlogo" />
            $DOGEPRIME
          </div>
          </Link>
        </div>
      </nav>
    );
  };
  export default Navbar;