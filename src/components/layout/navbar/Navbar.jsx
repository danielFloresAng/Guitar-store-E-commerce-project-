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
          <Link to={`/category/Solid`}>
            <li>Solid</li>
          </Link>
          <Link to={"/category/Semi-hollow"}>
            <li>Semi-hollow</li>
          </Link>
          <li>Products</li>
        </ul>
      </nav>
      <Link to="/cart">
        <h2>cart</h2>
      </Link>
    </header>
  );
};
