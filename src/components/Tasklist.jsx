import { Task } from './Task';
import useTaskList from '../hooks/useTaskList'
export const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask, toggleTask } = useTaskList();
  

  return (
  
    <ul>
  {tasks.map((task) => (
    <li key={task.id}>
      <Task
        id={task.id}
        completed={task.completed}
        createTask={createTask}
        toggleTask={toggleTask}
        onEditTask={updateTask}
        deleteTask={deleteTask}
      />
    </li>
  ))}
</ul>
  );
};
