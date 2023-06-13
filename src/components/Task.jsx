import React, { useState, useCallback } from 'react';

export const Task = ({ id, completed, description, onToggleTask, onEditTask, onDeleteTask }) => {
  const [editedDescription, setEditedDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);
  const [tempDescription, setTempDescription] = useState(description);

  const handleCheckboxChange = useCallback(() => {
    onToggleTask(id);
  }, [onToggleTask, id]);

  const handleEditTask = useCallback(() => {
    if (isEditing) {
      onEditTask(id, editedDescription);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setTempDescription(editedDescription);
    }
  }, [onEditTask, id, isEditing, editedDescription]);

  const handleDeleteTask = useCallback(() => {
    onDeleteTask(id);
  }, [onDeleteTask, id]);

  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
    setEditedDescription(tempDescription);
  }, [tempDescription]);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleCancelEdit}>Cancel</button>
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <span className={completed ? 'completed' : 'not-completed'}>{description}</span>
          <button onClick={handleEditTask}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </>
      )}
    </div>
  );
};
