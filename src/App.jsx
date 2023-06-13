import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import useTaskList from './hooks/useTaskList';

const App = () => {
  const { tasks, createTask, deleteTask, updateTask, toggleTask } = useTaskList();
  const [description, setDescription] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      createTask(description);
      setDescription('');
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onEditTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </>
  );
};

export default App;
