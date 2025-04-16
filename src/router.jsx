import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Complete from "./pages/Complete/Complete"


const AppRouter = ({ state, dispatch }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home state={state} dispatch={dispatch} />} />
        <Route path='/completed' element={<Complete state={state} dispatch={dispatch} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter