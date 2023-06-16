import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import useTaskList from './hooks/useTaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const { tasks, createTask, deleteTask, updateTask, toggleTask } = useTaskList();

  return (
    <>
      <Header />
      <TaskForm createTask={createTask} />
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
