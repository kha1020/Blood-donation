import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/Header';
import History from './components/History';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import Register from './components/Register';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Info from './pages/Info';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import PersonalInfoPage from './pages/PersonalInfoPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountMgmt from './admin/AccountMgmt';
import Admin from './admin/Admin';
import ApptMgmt from './admin/ApptMgmt';
import BloodBankMgmt from './admin/BloodBankMgmt';
import BloodRecipientMgmt from './admin/BloodRecipientMgmt';
import Dashboard from './admin/Dashboard';
import './admin/Dashboard.css';
import DonationCampaignMgmt from './admin/DonationCampaignMgmt';
import DonorMgmt from './admin/DonorMgmt';
import ReportMgmt from './admin/ReportMgmt';
import { AuthProvider } from './context/UserContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <ProfilePage />
        <Header />

        <Routes>
          {/* Regular routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/info" element={<Info />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/history" element={<History />} />
          <Route path="/certificate" element={<Certificate />} />
        
          <Route path="/personal-info" element={<PersonalInfoPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<Admin><Dashboard /></Admin>} />
          <Route path="/admin/ApptMgmt" element={<Admin><ApptMgmt /></Admin>} />
          <Route path="/admin/DonorMgmt" element={<Admin><DonorMgmt /></Admin>} />
          <Route path="/admin/DonationCampaignMgmt" element={<Admin><DonationCampaignMgmt /></Admin>} />
          <Route path="/admin/BloodBankMgmt" element={<Admin><BloodBankMgmt /></Admin>} />
          <Route path="/admin/BloodRecipientMgmt" element={<Admin><BloodRecipientMgmt /></Admin>} />
          <Route path="/admin/AccountMgmt" element={<Admin><AccountMgmt /></Admin>} />
          <Route path="/admin/ReportMgmt" element={<Admin><ReportMgmt /></Admin>} />
        </Routes>

        <Footer />
        <ToastContainer />
      </div>
    </Router>
      </AuthProvider>
  );
}

export default App;
