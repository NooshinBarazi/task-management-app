import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home.jsx";
import EditTask from "./pages/edit-task/[taskId].jsx";

function App() {

  return (
   <Router>
       <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/task/:id' element={<EditTask />}></Route>
       </Routes>
   </Router>
  )

}

export default App
