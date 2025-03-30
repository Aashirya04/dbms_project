import { Link } from "react-router-dom";  
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Famous paintings</div>
        <ul className="nav-links">
          <li><Link to="/query">Art Explorer</Link></li>  
          <li><a href="#cards">Exhibitions</a></li>
          <li><a href="#gall">Art Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="nav-buttons">
        <a href="#contact" className="join-btn">Join</a>
        <Link to="/query">  
          <button className="explore-btn">Explore</button>  
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
