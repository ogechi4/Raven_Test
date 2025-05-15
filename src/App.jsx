import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exchange from './pages/Exchange';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Exchange />} />
   
      </Routes>
    </Router>
  );
}
