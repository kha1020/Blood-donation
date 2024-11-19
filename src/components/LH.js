// LH.js
import React from 'react';
import './LH.css'; // Nếu bạn muốn sử dụng CSS riêng

const LH = () => {
  return (
    <div className="lh-container form">
      <h2>Đặt lịch hẹn</h2>
      <p>Hiến máu cứu người</p>
      <p>Với mỗi lần hiến máu, bạn có thể mang lại cơ hội cứu sống 3 người. Hãy cứu lấy mạng người bằng ít máu của mình!</p>
      
      <form className="lh-form">
        <label htmlFor="name">Họ và tên:</label>
        <input type="text" id="name" placeholder="Nhập họ và tên" required />

        <label htmlFor="date">Ngày hiến máu:</label>
        <input type="date" id="date" required />

        <label htmlFor="time">Thời gian:</label>
        <input type="time" id="time" required />

        <button type="submit">Đặt lịch</button>
      </form>

      <p>
        <a href="https://static.giotmauvang.org.vn/ihpstatic/GMV_HuongDanSuDung.pdf" className="guidelines-link" target="_blank" rel="noopener noreferrer">
          Xem hướng dẫn quy trình đăng ký hiến máu - Tại đây
        </a>
      </p>
    </div>
  );
};

export default LH;
