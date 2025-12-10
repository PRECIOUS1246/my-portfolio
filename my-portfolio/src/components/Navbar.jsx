import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h2><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Magtech</Link></h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
