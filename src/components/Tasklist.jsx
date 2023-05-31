import { Task } from './Task';
export const TaskList = ({ tasks, onToggleTask, onEditTask, onDeleteTask }) => {
  
  return (
  
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

