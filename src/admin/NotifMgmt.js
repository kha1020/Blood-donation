import React, { useState } from 'react';
import './NotifMgmt.css'; // Import file CSS

const NotifMgmt = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // Trạng thái được chọn

  const handleSendNotification = () => {
    // Logic gửi thông báo
    console.log('Thông báo đã được gửi:', { message, status });
  };

  return (
    <div className="notif-mgmt-center">
      <div className="notif-mgmt-form">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="notif-select"
        >
          <option value="">Chọn trạng thái</option>
          <option value="info">Thông tin</option>
          <option value="warning">Cảnh báo</option>
          <option value="success">Thành công</option>
          <option value="error">Lỗi</option>
        </select>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập thông báo..."
          rows="5"
          className="notif-textarea"
        />
        <button className="notif-button" onClick={handleSendNotification}>
          Gửi thông báo
        </button>
      </div>
    </div>
  );
};

export default NotifMgmt;
