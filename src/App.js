
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './Pages/Aboutme/Aboutme';
import Home from './Pages/Home/Home/Home';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<Aboutme></Aboutme>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
