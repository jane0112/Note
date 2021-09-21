import { createContext, useState } from 'react';

const defaultValue = {
  notes: '',
  keyInNotes: () => {},
};
const NoteContext = createContext(defaultValue);
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState('');
  const [linesItem, setLinesItem] = useState([]);
  const [screenMode, setScreenMode] = useState('');
  const [editorTheme, setEditorTheme] = useState('monokai')
  const keyInNotes = (txt) => {
    setNotes(txt);
  };
  const changeScreenMode = (mode) => {
    setScreenMode(mode);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        keyInNotes,
        linesItem,
        setLinesItem,
        screenMode,
        changeScreenMode,
        editorTheme,
        setEditorTheme
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
