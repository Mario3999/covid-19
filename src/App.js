import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import StateDetails from './components/StateDetails/StateDetails';
import About from './components/About/About';
// import DashContainer from './components/DashContainer/DashContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:id' element={<StateDetails/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
        {/* <DashContainer /> */}
      </div>
    </Router>
  );
}

export default App;
