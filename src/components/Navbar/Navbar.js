import React from 'react';
// import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navs">
        <li className="nav-item">My Note</li>
        <li className="nav-item">
          <button
            className="nav-item-btn"
            // onClick={() => applyType(ScreenType.editor)}
          >
            Editor
          </button>
          <button
            className="nav-item-btn"
            // onClick={() => applyType(ScreenType.half)}
          >
            Half/Half
          </button>
          <button
            className="nav-item-btn"
            // onClick={() => applyType(ScreenType.viewer)}
          >
            Viewer
          </button>
        </li>
      </ul>
    </div>
  );
};
Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
