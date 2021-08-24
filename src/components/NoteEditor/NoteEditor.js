import React, { useContext, useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import './NoteEditor.scss';
import ToolBar from '../Toolbar/Toolbar';
import { NoteContext } from '../../contexts/noteContext';

const NoteEditor = (props) => {
  const {notes,keyInNotes,setLinesItem} = useContext(NoteContext)

  const onBeforeChange = (editor, data, value) => {
    const lines = editor.display.maxLine.parent.lines;
    keyInNotes(value)
    setLinesItem(lines)
  
  };
  const editorDidMount = (editor) => {
    const lines = editor.display.maxLine.parent.lines;
    setLinesItem(lines)
  };
  return (
      <div className="note-editor-wrap">
        <div className="toolbar-wrap">
          <ToolBar />
        </div>
        <div className="note-editor">
          <CodeMirror
            value={notes}
            options={{
              theme: 'monokai',
              tabSize: 2,
              // mode: 'javascript',
              lineNumbers: true,
            }}
            editorDidMount={editorDidMount}
            onBeforeChange={onBeforeChange}
          ></CodeMirror>
        </div>
      </div>
  );
};

// NoteEditor.propTypes = {};

// NoteEditor.defaultProps = {};

export default NoteEditor;
