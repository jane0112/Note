import React, { useContext } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import './NoteEditor.scss';
import ToolBar from '../Toolbar/Toolbar';
import { NoteContext } from '../../contexts/noteContext';

const NoteEditor = () => {
  const { notes, keyInNotes, setLinesItem, editorTheme } = useContext(NoteContext);

  const onBeforeChange = (editor, data, value) => {
    const lines = [...editor.display.maxLine.parent.lines];
    // const linesTextArray = lines.map((item)=>item.text)||''
    keyInNotes(value);
    setLinesItem(lines);
    // console.log(linesTextArray);
    // window.localStorage.setItem('linesContent',JSON.stringify(linesTextArray))
  };
  const editorDidMount = (editor) => {
    const lines = [...editor.display.maxLine.parent.lines];
    setLinesItem(lines);
    // console.log(lines);
    // const jsonLines = JSON.stringify(lines)
    // window.localStorage.setItem('linesContent',jsonLines)
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
            theme: editorTheme,
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
