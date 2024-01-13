import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home.js';
import LogIn from './pages/log-in.js';
import SignUp from './pages/sign-up.js';
import DashboardPage from './pages/dashboard.js';
import AddSeminar from './pages/add-seminar.js';
import CertificateAchievement from './pages/certificate.js';
import AdminDashboard from './pages/admin.js';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/add-seminar" element={<AddSeminar />} />
      <Route path="/certificate" element={<CertificateAchievement />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
