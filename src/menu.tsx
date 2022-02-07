import React from "react";
import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <ol className="menuItems">
        <li className="menuItem">
          <NavLink className="icon" tag={Link} to="/"></NavLink>
          <label className="item-name">Личное</label>
        </li>
        <li className="menuItem">
          <NavLink className="icon" tag={Link} to="/education"></NavLink>
          <label className="item-name">Образование</label>
        </li>
        <li className="menuItem">
          <NavLink className="icon" tag={Link} to="/work"></NavLink>
          <label className="item-name">Опыт</label>
        </li>
        <li className="menuItem">
          <NavLink className="icon" tag={Link} to="/qualities"></NavLink>
          <label className="item-name">Качества</label>
        </li>
      </ol>
    </div>
  );
}
export default Menu;
