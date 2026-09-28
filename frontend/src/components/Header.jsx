import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const classN = ({ isActive }) => {
    if (isActive) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">VIA</Link>
          <p>Your Health. Your People. Connected </p>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={classN}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={classN}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/health" className={classN}>
              My Health
            </NavLink>
          </li>
          <li>
            <NavLink to="/people" className={classN}>
              My People
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
