import React from 'react';
import { AuthContextProvider } from '../context/AuthContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TopPage/>}></Route>
            <Route path="/sign-up" element={<SignUpPage/>}></Route>
            <Route path="/sign-in" element={<SignInPage/>}></Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
