import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header-nav">
      <Link to="/">
        <h3>Guitar Store</h3>
      </Link>
      
      <nav className="navBar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Products</li>
          <li>Servises</li>
          <li>Us</li>
        </ul>
      </nav>
      <Link to="/cart">
        <h2>cart</h2>
      </Link>
      
    </header>
  );
};
