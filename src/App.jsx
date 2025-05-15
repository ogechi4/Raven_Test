import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exchange from './pages/Exchange';
import RoqquHub from './pages/RoqquHub';
import Wallets from './pages/Wallets';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Exchange />} />
      
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/roqquhub" element={<RoqquHub />} />
      </Routes>
    </Router>
  );
}
