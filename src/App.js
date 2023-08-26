import './App.css';
import Insta from './components/Insta';
import Signup from './components/Signup';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element={<Insta/>}/>
          <Route path ="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
