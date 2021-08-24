import { createContext, useState } from 'react';

const defaultValue = {
  notes: '',
  keyInNotes: () => {},
};
const NoteContext = createContext(defaultValue);
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState('# 123');
  const [linesItem,setLinesItem] = useState([])
  const keyInNotes = (txt) => {
    setNotes(txt);
  };

  return (
    <NoteContext.Provider value={{notes,keyInNotes,linesItem,setLinesItem}}>
      {children}
    </NoteContext.Provider>
  );
};


export { NoteContext, NoteProvider };
