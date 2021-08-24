import './App.css';
import { NoteProvider } from './contexts/noteContext';
import Note from './Pages/Note/Note';

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <Note />
      </div>
    </NoteProvider>
  );
}

export default App;
