import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Faqs from './pages/Faqs'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
