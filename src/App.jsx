import Footer from './Footer';
import Header from './Header';
import createNote from './functions';
import notes from './notes';

function App() {  
  return (
    <>
    < Header />
    <div>{notes.map(createNote)}</div>
    < Footer />
    </>
  )
}

export default App;
