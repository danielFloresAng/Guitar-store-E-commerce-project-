import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header-nav">
      <Link to="/">
        <h3>Guitar Store</h3>
      </Link>

      <nav className="navBar">
        <ul>
          <Link to="/">
            <li className="all-instruments">Our products</li>
          </Link>
          <Link to={`/category/guitars`}>
            <li>Guitars</li>
          </Link>
          <Link to={"/category/amps"}>
            <li>Amps</li>
          </Link>
          <Link to={"/category/strings"}>
            <li>Strings</li>
          </Link>
          <Link to={"/category/pedalEffects"}>
            <li>Guitar effects pedals</li>
          </Link>
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
