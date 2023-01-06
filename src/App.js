import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Byeong from './components/Byeong';
import Eunhye from './components/Eunhye';
import Gilhwan from './components/Gilhwan';
import Home from './components/Home';
import Sado from './components/Sado';



function App() {

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/eunhye' element={<Eunhye />} ></Route>
          <Route path='/gilhwan' element={<Gilhwan />} ></Route>
          <Route path='/sado' element={<Sado />} ></Route>
          <Route path='/byeong' element={<Byeong />} ></Route>
        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;
