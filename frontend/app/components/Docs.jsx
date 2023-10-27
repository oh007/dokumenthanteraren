"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faEdit } from '@fortawesome/free-solid-svg-icons';

const MyDocs = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.docTitle || ''); // Använd ett tomt strängvärde som standard om det är odefinierat
  const [editedContent, setEditedContent] = useState(props.docContent || '');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    props.onSave(editedTitle, editedContent);
    setIsEditing(false);
  };


  return (
    <div className="flex w-9/12 mb-8 gap-10 p-5 border rounded-md border-slate-300 hover:border-slate-400">
      <FontAwesomeIcon icon={faFile} size="xs" className="w-5" />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{editedTitle}</h2>
          <p>{editedContent}</p>
        </div>
      )}
      <p>{props.createDate}</p>
      <button onClick={handleEditClick}>
        <FontAwesomeIcon icon={faEdit} size="xs" className="w-5" />
      </button>
      <button
        onClick={() => props.onDelete()}
        className="bg-red-600 m-1 p-2 min-w-[60px] rounded-[7px]"
      >
        Delete
      </button>
    </div>
  );
};

export default MyDocs;
