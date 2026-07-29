import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const API_URL = 'http://localhost:5000/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all notes on load
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        setNotes(response.data);
      } catch (err) {
        setError('Failed to fetch notes. Please try again.');
        console.error('Error fetching notes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async (newNote) => {
    try {
      setError(null);
      const response = await axios.post(API_URL, newNote);
      setNotes((prevNotes) => [response.data, ...prevNotes]);
    } catch (err) {
      setError('Failed to add note. Please try again.');
      console.error('Error adding note:', err);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      setError(null);
      await axios.delete(`${API_URL}/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (err) {
      setError('Failed to delete note. Please try again.');
      console.error('Error deleting note:', err);
    }
  };

  // App Layout Styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  };

  const errorStyle = {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    border: '1px solid #f5c6cb',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const loadingStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '40px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My Notes</h1>
      
      {error && <div style={errorStyle}>{error}</div>}
      
      <NoteForm onAdd={addNote} />
      
      {loading ? (
        <div style={loadingStyle}>Loading notes...</div>
      ) : (
        <NoteList notes={notes} onDelete={deleteNote} />
      )}
    </div>
  );
}

export default App;
