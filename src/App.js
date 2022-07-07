import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import StateDetails from './components/StateDetails/StateDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<StateDetails/>} />
        </Routes>
        {/* <DashContainer /> */}
      </div>
    </Router>
  );
}

export default App;
