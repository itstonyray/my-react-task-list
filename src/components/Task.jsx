import React, { useCallback } from 'react';

export const Task = ({ id, completed, description, onEditTask, onDeleteTask }) => {
  const handleCheckboxChange = useCallback(() => {
  }, 
  [id]);

  const handleEditTask = (() => {
   onEditTask(id);
  }, 
  [onEditTask, id]);

  const handleDeleteTask = (() => {
    onDeleteTask(id);
  }, 
  [onDeleteTask, id]);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{description}</span>
      <button onClick={handleEditTask}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};
