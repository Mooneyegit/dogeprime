import Logo from '../assert/Images/dogoprimeface.png'

const Navbar = () => { 
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img width={'30px'} src={Logo} alt="navlogo" />
            $DOGEPRIME
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;