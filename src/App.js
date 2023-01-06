import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Eunhye from './components/Eunhye';
import Home from './components/Home';




function App() {

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/eunhye' element={<Eunhye />} ></Route>
        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;
