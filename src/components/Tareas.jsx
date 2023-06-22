import {TaskList} from './TaskList';
import useTaskList from '../hooks/useTaskList'
import TaskForm from './TaskForm'


export const Tareas = () => {
  const { tasks, createTask, deleteTask, updateTask, toggleTask } = useTaskList();
  
  
  return (
    <div>
      <h1>Tareas</h1>
      <TaskList 
       tasks={tasks}
       
       onToggleTask={toggleTask}
       onEditTask={updateTask}
       onDeleteTask={deleteTask}
      />
      <TaskForm createTask={createTask}/>
    </div>
  );
};

