import React, { useState } from 'react';
import { FaBell, FaUser, FaSignInAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/UserContext';
import logo2 from '../images/ctd.png';
import logo1 from '../images/logo.jpg';
import Logout from './Logout';
import NotificationModal from './NotificationModal'; 
import './ProfilePage.css';

const ProfilePage = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái của menu xổ xuống
  const [notificationOpen, setNotificationOpen] = useState(false); // Trạng thái của hộp thoại thông báo
  const { user } = useAuthContext(); // Lấy thông tin user từ context
  const navigate = useNavigate();

  // Hàm xử lý nhấn vào tên để mở/đóng menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Hàm xử lý nhấn vào icon thông báo
  const toggleNotifications = () => {
    setNotificationOpen(!notificationOpen);
  };

  // Mock notifications data
  const notifications = [
    { id: 1, title: "THÔNG BÁO", date: "27/08/2024", time: "2 tháng trước", type: "general" },
    { id: 2, title: "KHẢO SÁT HÀI LÒNG NGƯỜI HIẾN MÁU/ TIỂU CẦU", date: "26/08/2024", time: "2 tháng trước", type: "survey" },
    { id: 3, title: "THÔNG BÁO LỊCH LÀM VIỆC DỊP LỄ QUỐC KHÁNH (1/9 & 2/9)", date: "16/08/2024", time: "3 tháng trước", type: "event" },
    // Add more notifications as needed
  ];

  return (
    <div className="container">
      {/* Header and Profile Section in one div */}
      <div className="header-profile">
        <div className="language-selector">VN | EN</div>
        <div className="images">
          <img src={logo1} alt="Logo 1" className="logo" />
          <img src={logo2} alt="Logo 2" className="logo" />
        </div>

        <div className="profile-info">
          {!user ? (
            <Link to='/login' className="login-button">
              <FaSignInAlt />
              Đăng nhập
            </Link>
          ) : (
            <>
              <FaBell
                className="notification-icon"
                onClick={toggleNotifications} // Toggling notification modal visibility
              /> {/* Icon thông báo */}

              <div className="circle">
                <img 
                  src={user.image || 'default-profile-image.jpg'} 
                  alt="Profile" 
                  className="profile-image" 
                />
              </div>
              <div className="name" onClick={toggleMenu}>{user.name}</div>
              
              {/* Dropdown menu */}
              {menuOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li onClick={() => navigate('/personal-info')}> {/* Điều hướng */} 
                      <FaUser style={{ marginRight: '10px' }} /> Thông tin cá nhân
                    </li>
                 

                    <Logout />
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Notification Modal */}
      {notificationOpen && (
        <NotificationModal
          isOpen={notificationOpen}
          onClose={() => setNotificationOpen(false)} 
          notifications={notifications}
        />
      )}
    </div>
  );
};

export default ProfilePage;
