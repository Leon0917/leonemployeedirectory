import React from "react";

function Header(props) {
  return (
    <header className="bg-secondary text-center">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-text">
          Staff Directory{" "}
          <input
          placeholder="filter"
            name="filter"
            type="text"
            value={props.search}
            onChange={props.handleChange}
          />
        </span>
      </nav>
    </header>
  );
}
export default Header;
