import React, { useCallback } from 'react';

const Task = ({ id, completed, description, onEditTask, onDeleteTask }) => {
  const handleCheckboxChange = useCallback(() => {
    onEditTask(id, !completed);
  }, 
  [onEditTask, id, completed]);

  const handleEditTask = useCallback((newDescription) => {
    onEditTask(id, newDescription);
  }, 
  [onEditTask, id]);

  const handleDeleteTask = useCallback(() => {
    onDeleteTask(id);
  }, 
  [onDeleteTask, id]);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <span className={completed ? 'completed' : 'not-completed'}>{description}</span>
      <button onClick={() => handleEditTask('New Description')}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

// Components used: useCallback, input, span, button.