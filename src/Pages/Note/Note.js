import React from 'react';
// import PropTypes from 'prop-types';
import './Note.scss';
import NoteViewer from '../../components/NoteViewer/NoteViewer';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import Navbar from '../../components/Navbar/Navbar';

const Note = () => {
  const onGetContent = (data) => {
    console.log(data);
  };
  return (
  <div>
    <Navbar />
    <div className="layout-wrap">
        <div className="left-section">
          <NoteEditor getContent={onGetContent} />
        </div>
        <div className="right-section">
          <NoteViewer /*noteContent={screenType}*/ />
        </div>
      </div>
  </div>
);}

// Note.propTypes = {};

// Note.defaultProps = {};

export default Note;
