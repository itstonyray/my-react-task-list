import React, { useState, useCallback } from 'react';

export const Task = ({ id, completed, description, onEditTask, onDeleteTask }) => {
  const [editedDescription, setEditedDescription] = useState(description);

  const handleCheckboxChange = useCallback(() => {
    onEditTask(id, !completed);
  }, [onEditTask, id, completed]);

  const handleEditTask = useCallback(() => {
    onEditTask(id, editedDescription);
  }, [onEditTask, id, editedDescription]);

  const handleDeleteTask = useCallback(() => {
    onDeleteTask(id);
  }, [onDeleteTask, id]);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      {editedDescription !== null ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span className={completed ? 'completed' : 'not-completed'}>{description}</span>
      )}
     <button onClick={() => {handleEditTask('New Description'); setonClickEdit(!onClickEdit)}}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

