import { Task } from './Task';
export const Tasklist = ({ tasks, onToggleTask, onEditTask, onDeleteTask }) => {
 

  return (
    <div>
      {tasks.map((tasks) => (
        <Task
          key={tasks.id}
          id={tasks.id}
          description={tasks.description}
          completed={tasks.completed}
          onToggleTask={onToggleTask}
          editTask={onEditTask}
          deleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};





