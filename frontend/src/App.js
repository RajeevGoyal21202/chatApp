import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup/Signup';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Chat from './components/Chat';
function App() {
  return (
    
    <div className="App">

      <Routes>
    
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/chat' element={<Chat/>}/>
         </Route>
        
      </Routes>
    </div>
  );
}

export default App;
