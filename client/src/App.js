import logo from './logo.svg';
import './App.css';
import Comments from './components/comments';
import Auth from './components/auth';
import SignUp from './components/signUp';
import AddComment from './components/addcomment';
import FullComment from './pages/fullComment';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'


function App() {
  return (
    <>
     <BrowserRouter>
     
        <div className="app">
         
          <div className="main">
            <Routes>
              <Route path="/" element={<FullComment/>} />
              <Route path="/comments" element={<Comments/>} />
              <Route path="/addcomment" element={<AddComment/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<Auth/>} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
