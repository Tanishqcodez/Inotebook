import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert desc="This is amazing react course"/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
