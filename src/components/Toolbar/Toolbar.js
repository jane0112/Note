import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './Toolbar.scss';
import {
  // AiOutlineBold,
  // AiOutlineItalic,
  // AiOutlineStrikethrough,
  // AiOutlineUnorderedList,
  AiOutlineBgColors,
} from 'react-icons/ai';
import { NoteContext } from '../../contexts/noteContext';
const screenModeEnum = {
  edit: 0,
  half: 1,
  view: 2,
};

const Toolbar = () => {
  const { screenMode, setEditorTheme } = useContext(NoteContext);
  const [toolbarClassName, setToolbarClassName] = useState('toolbar');
  const [themeDropdown, setThemeDropdwn] = useState('theme-dropdown');
  const [dropdownIsShow, setDropdownIsShow] = useState(false);
  useEffect(() => {
    switch (screenMode) {
      case screenModeEnum.edit:
        setToolbarClassName('toolbar toolbar--fullscreen');
        break;
      case screenModeEnum.half:
        setToolbarClassName('toolbar');
        break;
      case screenModeEnum.view:
        setToolbarClassName('toolbar--hide');
        break;
      default:
        setToolbarClassName('toolbar');
    }

    if (dropdownIsShow) {
      setThemeDropdwn('theme-dropdown show');
    } else {
      setThemeDropdwn('theme-dropdown');
    }
  }, [screenMode, dropdownIsShow]);

  const openDropdown = () => {
    setDropdownIsShow(!dropdownIsShow);
  };

  const setTheme = (theme) => {
    setEditorTheme(theme);
    setDropdownIsShow(false);
  };

  return (
    <div className={toolbarClassName}>
      {/* <div>
        <button className="tool-btn">
          <AiOutlineBold className="tool-icon" />
        </button>
      </div>
      <div>
        <button className="tool-btn">
          <AiOutlineItalic className="tool-icon" />
        </button>
      </div>
      <div>
        <button className="tool-btn">
          <AiOutlineStrikethrough className="tool-icon" />
        </button>
      </div>
      <div>
        <button className="tool-btn">
          <AiOutlineUnorderedList className="tool-icon" />
        </button>
      </div> */}
      <div className="dropdown">
        <button className="tool-btn">
          <AiOutlineBgColors className="tool-icon" onClick={openDropdown} />
        </button>
        <ul className={themeDropdown}>
          <li className="list-item">
            <button onClick={() => setTheme('monokai')}>monokai</button>
          </li>
          <li className="list-item">
            <button onClick={() => setTheme('ayu-dark')}>ayu-dark</button>
          </li>
          <li className="list-item">
            <button onClick={() => setTheme('base16-light')}>
              base16 light
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Toolbar.propTypes = {};

// Toolbar.defaultProps = {};

export default Toolbar;
