import React from 'react';
// import PropTypes from 'prop-types';
import './Toolbar.scss';
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnorderedList,
} from 'react-icons/ai';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="tool-btn">
        <AiOutlineBold className="tool-icon" />
      </button>
      <button className="tool-btn">
        <AiOutlineItalic className="tool-icon" />
      </button>
      <button className="tool-btn">
        <AiOutlineStrikethrough className="tool-icon" />
      </button>
      <button className="tool-btn">
        <AiOutlineUnorderedList className="tool-icon" />
      </button>
    </div>
  );
};

// Toolbar.propTypes = {};

// Toolbar.defaultProps = {};

export default Toolbar;
