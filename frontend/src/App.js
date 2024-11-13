import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup/Signup';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
function App() {
  return (
    
    <div className="App">

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
