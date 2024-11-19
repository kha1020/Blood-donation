import React from 'react';
import './Appointment.css';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Appointment = () => {
  return (
    <div className="main-container">

      
      <div className="appointment-container">
        {/* Scroll to top button */}
        <ScrollToTopButton />
        
        <h1>Thông tin đăng ký hiến máu</h1>
        
        <div className="content">
          {/* Container for personal info and registration slip */}
          <div className="info-container">
            <div className="personal-info">
              <h2>Thông tin cá nhân</h2>
              <p>Họ và tên: Phạm Đinh Anh Kha</p>
              <p>Số CMND: 233392222</p>
              <p>Ngày sinh: 10/10/2002</p>
              <p>Giới tính: Nam</p>
              <p>Nghề nghiệp: Chuyên viên</p>
              <p>Đơn vị: -</p>
              <p>Nhóm máu: -</p>
            </div>

            <div className="registration-slip">
              <h2>Phiếu đăng ký hiến máu</h2>
              <p>Chưa có phiếu đăng ký hiến máu</p>
            </div>
          </div>

          <div className="contact-info">
            <h2>Thông tin liên hệ</h2>
            <p>Địa chỉ liên lạc: 34, Phường Thắng Lợi, Thành Phố Kon Tum, Tỉnh Kon Tum</p>
            <p>Điện thoại di động: 0365217499</p>
            <p>Điện thoại bàn: -</p>
            <p>Email: anhkhaphamdinh@gmail.com</p>
          </div>
        </div>

        {/* Button container */}
        <div className="button-container">
          <button className="register-button">Đăng ký hiến máu</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
