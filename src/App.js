import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';

function App() {
  return (
    <>
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
