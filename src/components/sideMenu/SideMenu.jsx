import React from "react";
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
export default function SideMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`SideMenu ${isOpen ? "open" : "close"}`}>
      <FaXmark className="xmark" onClick={toggleMenu} />
      <ul className="SideLinks">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"/"}>Shop</NavLink>
        </li>

        <li>
          <NavLink to={"/"}>About Us</NavLink>
        </li>

        <li>
          <NavLink to={"/"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Cart</NavLink>
          <p>($0)</p>
        </li>
        <li>
          <FaRegUser />
          <NavLink to={"/"}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}
