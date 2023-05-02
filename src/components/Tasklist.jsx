import { Task } from "./Task";


// eslint-disable-next-line react/prop-types
export const Tasklist = ({tasks}) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} id={task.id} completed={task.completed} />
            ))}
        </div>
    )
}
