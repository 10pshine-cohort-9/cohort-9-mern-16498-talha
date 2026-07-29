import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete }) => {
  const emptyStyle = {
    textAlign: 'center',
    color: '#888',
    marginTop: '20px',
    fontSize: '1.1rem'
  };

  if (!notes || notes.length === 0) {
    return <div style={emptyStyle}>No notes yet.</div>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
