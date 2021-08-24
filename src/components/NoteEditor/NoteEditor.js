import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import './NoteEditor.scss';
import ToolBar from '../Toolbar/Toolbar'
// require('codemirror/mode/xml/xml');
// require('codemirror/mode/javascript/javascript');

const NoteEditor = (props) => {
  const [code,setCode]=useState('# HackMD')
  const onBeforeChange = (editor, data, value) => {
    const lines = editor.display.maxLine.parent.lines;
    // this.setState({ code: value });
    setCode(value)
    props.getContent(lines);
  };
  const editorDidMount = (editor) => {
    const lines = editor.display.maxLine.parent.lines;
    props.getContent(lines);
  };
  return (
      <div className="note-editor-wrap">
        <div className="toolbar-wrap">
          <ToolBar />
        </div>
        <div className="note-editor">
          <CodeMirror
            value={code}
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
