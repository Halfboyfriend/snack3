import './App.css';
import Home from './pages/Home';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
