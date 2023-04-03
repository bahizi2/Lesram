import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Les Rams</h1>
        <ul className="nav-menu">
          <li>
            <Link><i class="fa-solid fa-house-user"></i>Home</Link>
          </li>
        </ul>

      </nav>
    );
  }
}

export default Navbar;
