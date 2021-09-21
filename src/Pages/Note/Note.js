import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './Note.scss';
import NoteViewer from '../../components/NoteViewer/NoteViewer';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import Navbar from '../../components/Navbar/Navbar';
import { NoteContext } from '../../contexts/noteContext';
const screenModeEnum = {
  edit: 0,
  half: 1,
  view: 2,
};

const Note = () => {
  const { screenMode } = useContext(NoteContext);
  const [leftSectionClassName, setLeftSectionClassName] =
    useState('left-section');
  const [rightSectionClassName, setRightSectionClassName] =
    useState('right-section');
  useEffect(() => {
    switch (screenMode) {
      case screenModeEnum.view:
        setLeftSectionClassName('left-section left-section--hide');
        setRightSectionClassName('right-section right-section--show');
        break;
      case screenModeEnum.half:
        setLeftSectionClassName('left-section');
        setRightSectionClassName('right-section');
        break;
      case screenModeEnum.edit:
        setLeftSectionClassName('left-section left-section--show');
        setRightSectionClassName('right-section right-section--hide');
        break;
      default:
        setLeftSectionClassName('left-section');
        setRightSectionClassName('right-section');
    }
  }, [screenMode]);

  return (
    <div>
      <Navbar />
      <div className="layout-wrap">
        <div className={leftSectionClassName}>
          <NoteEditor />
        </div>
        <div className={rightSectionClassName}>
          <NoteViewer /*noteContent={screenType}*/ />
        </div>
      </div>
    </div>
  );
};

// Note.propTypes = {};

// Note.defaultProps = {};

export default Note;
