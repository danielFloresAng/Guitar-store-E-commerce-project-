import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Link to={'./'}>
      <p>Guitar Store</p>
      </Link>
    </div>
  );
};
