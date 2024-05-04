import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Events from './components/Events';
import AddEvents from './components/AddEvents';
import Events1 from './components/Events1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        {/* <Route path='/events1' element={<Events1/>}/> */}
        <Route path='/addevents' element={<AddEvents/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
