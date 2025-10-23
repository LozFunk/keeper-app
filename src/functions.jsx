import Note from './Note'

function createNote(entry){
    return <Note
    key = {entry.key}
    title = {entry.title}
    content = {entry.content}
    />
}

export default createNote;