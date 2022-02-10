import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Reports1 from './pages/Reports1';
import Reports2 from './pages/Reports2';
import Reports3 from './pages/Reports3';
import Users from './pages/Users';
import Revenue from './pages/Revenue';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* detta är nya sättet */}
        <Route exact path='/overview'  element={<Overview/>} />
        <Route path='/overview/users'  element={<Users/>} />
        <Route path='/overview/revenue'  element={<Revenue/>} />
        <Route  path='/reports'  element={<Reports/>} />
        <Route  path='/reports/reports1'  element={<Reports1/>} />
        <Route  path='/reports/reports2' element={<Reports2/>} />
        <Route  path='/reports/reports3' element={<Reports3/>} />
      </Routes>
    </Router>
  );
}

export default App;
