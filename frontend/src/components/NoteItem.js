import React from 'react';

const NoteItem = ({ note, onDelete }) => {
  const itemStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '12px',
    backgroundColor: '#fff',
    position: 'relative'
  };

  const titleStyle = {
    margin: '0 0 8px 0',
    fontSize: '1.2rem',
    color: '#333'
  };

  const contentStyle = {
    margin: '0 0 16px 0',
    color: '#666',
    whiteSpace: 'pre-wrap'
  };

  const buttonStyle = {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 12px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  };

  return (
    <div style={itemStyle}>
      <h3 style={titleStyle}>{note.title}</h3>
      <p style={contentStyle}>{note.content}</p>
      <button style={buttonStyle} onClick={() => onDelete(note._id)}>
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
