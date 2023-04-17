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
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import ContactUs from './components/ContactUs';

function App() {

  
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
