import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import useTaskList from './hooks/useTaskList';
import ContactForm from './components/ContactForm';

const App = () => {
  const { tasks, createTask, deleteTask, updateTask, toggleTask } = useTaskList();

  return (
    <>
      <Header />
      <ContactForm createTask={createTask} />
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
