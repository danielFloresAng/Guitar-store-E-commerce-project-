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
            <li className="all-instruments">Todos los instrumentos</li>
          </Link>
          <Link to={`/category/Solid`}>
            <li>Solid</li>
          </Link>
          <Link to={"/category/Semi-hollow"}>
            <li>Semi-hollow</li>
          </Link>
          <Link to={"/category/Acoustic"}>
            <li>Acoustic</li>
          </Link>
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
