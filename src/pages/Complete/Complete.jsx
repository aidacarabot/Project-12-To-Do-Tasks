import React from 'react';
import './Complete.css';
import TaskList from '../../components/TaskList/TaskList';

const Complete = ({ state, dispatch }) => {
  // Filtra las listas que contienen al menos una tarea completada
  const completedLists = state.lists.filter((list) =>
    list.tasks.some((task) => task.completed)
  );

  return (
    <div className="complete">
      {completedLists.length === 0 ? (
        <p>No completed tasks yet!</p> // Mensaje cuando no hay tareas completadas
      ) : (
        completedLists.map((list) => (
          <TaskList key={list.id} list={list} dispatch={dispatch} />
        ))
      )}
    </div>
  );
};

export default Complete;