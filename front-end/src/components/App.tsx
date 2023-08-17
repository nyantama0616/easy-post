import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import SignUpPage from './pages/SignUpPage';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TopPage/>}></Route>
          <Route path="/sign-up" element={<SignUpPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
