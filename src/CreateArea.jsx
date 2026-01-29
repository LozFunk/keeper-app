import { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

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
    <form class="create-note">
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
      <Zoom in={true}>
      <Fab onClick={handleClick}>< AddIcon /></Fab>  
      </Zoom>
    </form>
  );
}

export default CreateArea;