import React from 'react'

const initialState = {
  lists: []  // Asegúrate de que 'lists' sea un array vacío al inicio
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {

    //! AGREGAR UNA NUEVA LISTA
    case 'ADD_LIST':
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: Date.now(), name: action.name, tasks: [] }
        ]
      }
    
    //! ELIMINAR UNA LISTA
    case 'DELETE_LIST':
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.id)
      }

    //! AGREGAR UNA TAREA A UNA LISTA
    case 'ADD_TASK':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.listId
            ? {
                ...list,
                tasks: [
                  ...list.tasks,
                  { id: Date.now(), name: action.name, completed: false }
                ]
              }
            : list
        )
      }

    //! MARCAR O DESMARCAR UNA TAREA
    case 'TOGGLE_TASK':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.listId
            ? {
                ...list,
                tasks: list.tasks.map((task) =>
                  task.id === action.taskId
                    ? { ...task, completed: !task.completed }
                    : task
                )
              }
            : list
        )
      }
    
     //! ELIMINAR UNA TAREA DE UNA LISTA
    case 'DELETE_TASK':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.listId
            ? {
                ...list,
                tasks: list.tasks.filter((task) => task.id !== action.taskId)
              }
            : list
        )
      }
    
    //! CAMBIAR EL NOMBRE DE UNA LISTA
    case 'EDIT_LIST_NAME':
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.id ? { ...list, name: action.name } : list
        )
      }
    
    //! CAMBIAR EL NOMBRE DE UNA TAREA
    case 'EDIT_TASK_NAME':
      return {
        ...state, 
        lists: state.lists.map((list) => 
          list.id === action.listId
            ? {
                ...list,
                tasks: list.tasks.map((task) =>
                  task.id === action.taskId ? { ...task, name: action.name } : task
                )
              }
            : list
        )
      };
      default:
        return state;
  }
};

export default taskReducer;