import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactUs, Homepage } from './pages';

function App() {
  return (
    <>
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
