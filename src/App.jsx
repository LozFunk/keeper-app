import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return <>
    <Header />
    <CreateArea onAdd={addNote} />
    <div>
      {notes.map(note => (
        <Note 
          key={note.id} 
          id={note.id}
          title={note.title} 
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
    <Footer />
  </>
}

export default App;
