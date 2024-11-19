import React from 'react';
import './PersonalInfoPage.css';

const PersonalInfoPage = () => {
  return (
    <div className="personal-info-container">
      <h1>Thông tin cá nhân</h1>
      <div className="info-section">
        <div className="info-item">
          <strong>Họ và tên:</strong> Phạm Đinh Anh Kha
        </div>
        <div className="info-item">
          <strong>Email:</strong> kha@example.com
        </div>
        <div className="info-item">
          <strong>Số điện thoại:</strong> 0123 456 789
        </div>
        <div className="info-item">
          <strong>Địa chỉ:</strong> Đà Nẵng, Việt Nam
        </div>
        <div className="info-item">
          <strong>Ngày sinh:</strong> 01/01/1999
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
