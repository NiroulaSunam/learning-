import { useState, useEffect } from 'react'

export default function Home() {

  const [notes, setNotes] = useState([]) // array of all notes fetched from database

  // what users is currently typing into input fields = the form state
  const [title, setTitle] = useState('') 
  const [content, setContent] = useState('')

  /// GET the notes
  useEffect(() => {
    fetch('/api/notes')
      .then(res => res.json()) //.then is the older version of await
      .then(data => setNotes(data))
  }, [])

  // POST (create) the notes
  async function handleAdd(){
    if (!title && !content) return //returns if the data is empty
    const noteTitle = title || ' '
    const noteContent = content || ' '
    // the upper one changes for when either Title or Content is empty, rather than changing the database working within constrain of database not null to give a value while missing tile or content

    const res = await fetch('/api/notes', { // waits for HTTP request to complete and get a response back from the server 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: noteTitle, content: noteContent })
    })
    const newNote = await res.json() // waits for response body to be parsed into the javascript object
    setNotes([newNote, ...notes]) //shows the new note at the front
    setTitle('')
    setContent('')
  }

  // DELETE the notes
  async function handleDelete(id) {
    console.log('Deleting id:', id, typeof id) // to check for error related to delete -- print the id of which it is deleting 
    await fetch('/api/notes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ id })
    })
    setNotes(notes.filter(note => note.id !== id))
  }

  // PUT (update) the notes
  async function handleUpdate(id, currentTitle, currentContent) {
    const newTitle = prompt('New title', currentTitle)
    const newContent = prompt('New content', currentContent)
    if (newTitle === null || newContent === null) return // if we cancel the update, the values would be null, and it will check for null or ' '. so to not have the current data over, we use this to return and not proceed when canceled.
    if (!newTitle && !newContent) return
    const res = await fetch('api/notes', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        title: newTitle || ' ', // when title becomes empty it become false, so it either has to be a new title or ' '.  so it works for ' '.
        content: newContent || ' '
      })
    })
    const updated = await res.json()
    setNotes(notes.map(note => note.id === id? updated: note))
  }

  return (
    <div>
      <h1>Notes App</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>Add Note</button>

      {notes.map(note => (
        <div key={note.id}> {/* key is for react to track each item internally. when note list changes - a note is added or deleted - React needs to know which specific DOM elements to update */}
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
          <button onClick={() => handleUpdate(note.id, note.title, note.content)}>Edit</button>
        </div>
      ))}
    </div>
  )
}

