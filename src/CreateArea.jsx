import { useState } from 'react';

function CreateArea({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onAdd({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form>
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Take a note..." 
        rows="3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /> 
      <button onClick={handleClick}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>  
    </form>
  );
}

export default CreateArea;