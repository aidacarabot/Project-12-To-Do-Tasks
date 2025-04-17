import React from 'react';
import './Complete.css';
import TaskList from '../../components/TaskList/TaskList';

const Complete = ({ state, dispatch }) => {
  const completedLists = state.lists.filter((list) =>
    list.tasks.some((task) => task.completed)
  );

  return (
    <div className="complete">
      {completedLists.length === 0 ? (
        <p>No completed tasks yet!</p>
      ) : (
        completedLists.map((list) => (
          <TaskList key={list.id} list={list} dispatch={dispatch} showAddTaskButton={false} showCompletedTasks={true} />
        ))
      )}
    </div>
  );
};

export default Complete;