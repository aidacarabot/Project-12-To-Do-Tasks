import React from 'react';
import './Home.css';
import TaskList from '../../components/TaskList/TaskList';

const Home = ({ state, dispatch }) => {
  return (
    <main className="home">
      <div className="div-addBtn">
        <button onClick={() => dispatch({ type: 'ADD_LIST', name: 'Untitled List' })}>+ Add New List</button>
      </div>
      <section className="tasks-container">
        {state.lists.map((list) => (
          <TaskList key={list.id} list={list} dispatch={dispatch} />
        ))}
      </section>
    </main>
  );
};

export default Home;