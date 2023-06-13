import { useReducer, useEffect } from 'react';

const taskListReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'UPDATE_TASK':
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.newDescription,
          };
        }
        return task;
      });
    case 'TOGGLE_TASK':
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    default:
      return state;
  }
};

const useTaskList = () => {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch({ type: 'SET_TASKS', payload: storedTasks });
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (description) => {
    const newTask = {
      id: tasks.length + 1,
      description: description,
      completed: false,
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  const updateTask = (taskId, newDescription) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: { id: taskId, newDescription: newDescription },
    });
  };

  const toggleTask = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  return { tasks, createTask, deleteTask, updateTask, toggleTask };
};

export default useTaskList;
