import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        description: description,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setDescription('');
    }
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleEditTask = (taskId, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            description: newDescription,
          };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
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
        onToggleTask={handleToggleTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
