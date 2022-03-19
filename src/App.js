import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Faqs from './pages/Faqs'
import Project from './pages/Project';
import Rarity from './pages/Rarity';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';

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
      <Route path="/project" element={<Project />} />
      <Route path="/rarity" element={<Rarity />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
