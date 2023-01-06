import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Eunhye from './components/Eunhye';
import Home from './components/Home';

=======

import Footer from './components/Footer';

import Nav from './components/Nav'
>>>>>>> abe90591308f516553fd03b519ab50a3cd700240




function App() {

  return (
<<<<<<< HEAD
    <div className="App ">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/eunhye' element={<Eunhye />} ></Route>
        </Routes>
      </BrowserRouter>
    </div >
=======

    <div className="App">
      <header className="App-header">
        <Footer />
      </header>

      <Nav />
>>>>>>> abe90591308f516553fd03b519ab50a3cd700240

  );
}

export default App;
