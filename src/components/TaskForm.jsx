import React from 'react';
import { useForm } from 'react-hook-form';

const TaskForm = ({ createTask }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleAddTask = handleSubmit((data) => {
    if (data.description.trim() !== '') {
      createTask(data.description);
      reset();
    }
  });

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Enter task description"
        {...register('description', { required: true, minLength: 3 })}
      />
      <span>{errors.description && <p>Please enter at least 3 characters for the task name.</p>}</span>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
