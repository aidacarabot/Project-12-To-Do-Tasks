import './App.css'
import AppRouter from './router'
import taskReducer from './reducers/taskReducer';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // Usamos el custom hook para persistir el estado en el localStorage
  const [state, setState] = useLocalStorage('taskAppState', { lists: [] });

  // Usamos el reducer con el estado obtenido del localStorage
  const dispatch = (action) => {
    const newState = taskReducer(state, action);  // Llamamos al reducer para obtener el nuevo estado
    setState(newState);  // Actualizamos el localStorage con el nuevo estado
  };

  return <AppRouter state={state} dispatch={dispatch} />;
}

export default App;