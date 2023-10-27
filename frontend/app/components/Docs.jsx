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

  /* DATUM */
  const createDate = new Date(props.createDate);


const formattedDate = createDate.toLocaleString('sv-SE', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

  return (
    <div className="w-full md:w-9/12 mb-8 p-5 border rounded-md border-slate-300 hover:border-slate-400">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-10">
          <FontAwesomeIcon icon={faFile} size="xl" className="w-5" />
        </div>
        {isEditing ? (
          <div className="flex flex-col w-full">
            <input
              className="w-full mb-2 p-2 border border-slate-700 rounded"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <input
              className="w-full mb-2 p-2 border border-slate-700 rounded"
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">{editedTitle}</h2>
            <p>{editedContent}</p>
          </div>
        )}
       <p className="text-sm">{formattedDate}</p>
        <button onClick={handleEditClick}>
          <FontAwesomeIcon icon={faEdit} size="xs" className="w-5" />
        </button>
        <button
          onClick={() => props.onDelete()}
          className="w-full md:w-40 place-content-around bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyDocs;
