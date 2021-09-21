import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/noteContext';
import { rowTranslate } from '../../utils/MarkdownProcessor';
import './NoteViewer.scss';

const NoteViewer = () => {
  const { linesItem } = useContext(NoteContext);
  const elemInnerHTML = linesItem.map((item, idx) => {
    console.log(item);
    return rowTranslate(item.text, idx);
  });

  return (
    <div
      className="note-viewer"
      dangerouslySetInnerHTML={{ __html: elemInnerHTML.join('') }}
    ></div>
  );
};

export default NoteViewer;
