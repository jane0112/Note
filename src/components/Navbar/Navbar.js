import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/noteContext';
// import PropTypes from 'prop-types';
import './Navbar.scss';
import {AiOutlineEdit,AiOutlineEye} from 'react-icons/ai'
import {BsLayoutSplit} from 'react-icons/bs'

const screenMode = {
  edit: 0,
  half: 1,
  view: 2
}

const Navbar = () => {
  const {changeScreenMode} = useContext(NoteContext)
  return (
    <div className="navbar">
      <ul className="navs">
        <li className="nav-item title">FakeMD</li>
        <li className="nav-item nav-item-tool">
          <button
            className="nav-item-btn"
            onClick={() => changeScreenMode(screenMode.edit)}
          >
            <AiOutlineEdit size="18px"/>
          </button>
          <button
            className="nav-item-btn"
            onClick={() => changeScreenMode(screenMode.half)}
          >
            <BsLayoutSplit size="18px"/>
          </button>
          <button
            className="nav-item-btn"
            onClick={() => changeScreenMode(screenMode.view)}
          >
            <AiOutlineEye size="18px"/>
          </button>
        </li>
      </ul>
    </div>
  );
};
// Navbar.propTypes = {};

// Navbar.defaultProps = {};

export default Navbar;
