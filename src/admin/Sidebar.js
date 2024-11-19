import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx'; // Dùng thư viện clsx để xử lý lớp CSS
import './Sidebar.css';

const Sidebar = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoutClick = () => setShowLogoutConfirmation(true);

  const confirmLogout = () => {
    // Clear session or token (implement as per your needs)
    setShowLogoutConfirmation(false);
    navigate('/login'); // Redirect to login page after logout
  };

  const cancelLogout = () => setShowLogoutConfirmation(false);

  // Helper function to check if the current route matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Dashboard</h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/admin" className={clsx({ active: isActive('/admin') })}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/DonorMgmt" className={clsx({ active: isActive('/admin/DonorMgmt') })}>
            Quản lý người hiến máu
          </Link>
        </li>
        <li>
          <Link to="/admin/ApptMgmt" className={clsx({ active: isActive('/admin/ApptMgmt') })}>
            Quản lý lịch hẹn
          </Link>
        </li>
        
        {/* New section for Blood Donation Campaign Management */}
        <li>
          <Link to="/admin/DonationCampaignMgmt" className={clsx({ active: isActive('/admin/DonationCampaignMgmt') })}>
            Quản lý đợt hiến máu
          </Link>
        </li>
        {/* New section for Blood Bank Management */}
        <li>
          <Link to="/admin/BloodBankMgmt" className={clsx({ active: isActive('/admin/BloodBankMgmt') })}>
            Quản lý ngân hàng máu
          </Link>
        </li>
        {/* New section for Blood Recipient Management */}
        <li>
          <Link to="/admin/BloodRecipientMgmt" className={clsx({ active: isActive('/admin/BloodRecipientMgmt') })}>
            Quản lý người nhận máu
          </Link>
        </li>
        {/* New section for Account Management */}
        <li>
          <Link to="/admin/AccountMgmt" className={clsx({ active: isActive('/admin/AccountMgmt') })}>
            Quản lý tài khoản
          </Link>
        </li>
        {/* New section for Report and Statistics Management */}
        <li>
          <Link to="/admin/ReportMgmt" className={clsx({ active: isActive('/admin/ReportMgmt') })}>
             Báo cáo và thống kê
          </Link>
        </li>
      </ul>
      <div className="logout">
        <button onClick={handleLogoutClick}>Logout</button>
      </div>

      {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <h3 className="confirmation-title">Are you sure you want to log out?</h3>
          <div className="confirmation-buttons">
            <button onClick={confirmLogout}>Yes</button>
            <button onClick={cancelLogout}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
