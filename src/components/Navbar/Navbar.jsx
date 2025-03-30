import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li><a href="#">Art Gallery</a></li>
          <li><a href="#">Exhibitions</a></li>
          <li><a href="#">Artists</a></li>
          <li className="dropdown">
            <a href="#">More Info <span className="arrow">▼</span></a>
          </li>
        </ul>
      </div>
      <div className="nav-buttons">
        <button className="join-btn">Join</button>
        <button className="explore-btn">Explore</button>
      </div>
    </nav>
  );
};

export default Navbar;
