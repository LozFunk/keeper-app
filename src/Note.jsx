function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button class="delete" onClick={() => onDelete(id)}>
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <path d="M3 6h18M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 11v6M14 11v6M9 6V4h6v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    </div>
  );
}

export default Note;