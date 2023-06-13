import React, { useState, useCallback } from 'react';

export const Task = ({ id, completed, description, onEditTask, onDeleteTask }) => {
  const [editedDescription, setEditedDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    onEditTask(id, !completed);
  }, [onEditTask, id, completed]);

  const handleEditTask = useCallback(() => {
    onEditTask(id, editedDescription);
    setIsEditing(false);
  }, [onEditTask, id, editedDescription]);

  const handleDeleteTask = useCallback(() => {
    onDeleteTask(id);
  }, [onDeleteTask, id]);

  const handleStartEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancelEditing = useCallback(() => {
    setIsEditing(false);
    setEditedDescription(description);
  }, [description]);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span className={completed ? 'completed' : 'not-completed'}>{description}</span>
      )}
      {isEditing ? (
        <>
          <button onClick={handleEditTask}>Save</button>
          <button onClick={handleCancelEditing}>Cancel</button>
        </>
      ) : (
        <button onClick={handleStartEditing}>Edit</button>
      )}
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};
