import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/views/features/Home/Home';
import StateDetails from './pages/views/features/StateDetails/StateDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<StateDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
