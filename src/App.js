import './App.css';
import Home from './pages/Home';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <Router>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
  );
}

export default App;
