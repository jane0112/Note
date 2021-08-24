import React, { useContext, useEffect } from 'react';
import { NoteContext } from '../../contexts/noteContext';
import { rowTranslate } from '../../utils/MarkdownProcessor';
// import PropTypes from 'prop-types';
// import './NoteViewer.scss';

const NoteViewer = () => {
  const {linesItem} = useContext(NoteContext);
  console.log(linesItem);

  return (
    <div className="NoteViewer">
      {linesItem.map((item, idx) => {
      return rowTranslate(item.text, idx);
    })}
    </div>
  );
};

// NoteViewer.propTypes = {};

// NoteViewer.defaultProps = {};

export default NoteViewer;
