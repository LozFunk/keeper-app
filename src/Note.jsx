import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <Fab onClick={() => onDelete(id)}><DeleteIcon/></Fab>
    </div>
  );
}

export default Note;