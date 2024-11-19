import React from 'react';
import './Footer.css';
import logoImage from '../images/0.jpg'; // Sử dụng import để đưa ảnh vào

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <h2>Logo</h2>
          <img src={logoImage} alt="Logo" />
        </div>

        <div className="footer-section contact">
          <h3>Liên hệ</h3>
          <p><strong>TT Hiến Máu Nhân Đạo</strong></p>
          <p><span className="material-icons">location_on</span> 466 Nguyễn Thị Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí Minh</p>
          <p><span className="material-icons">location_on</span> 106 Thiên Phước, Phường 9, Tân Bình, Thành phố Hồ Chí Minh</p>
          <p><span className="material-icons">phone</span> Liên hệ giờ hành chính: <span className="material-icons">phone</span> 028 3868 5509, <span className="material-icons">phone</span> 028 3868 5507</p>

          <p><strong>Bệnh viện BTH</strong></p>
          <p><span className="material-icons">location_on</span> 118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
          <p><span className="material-icons">location_on</span> 24 Nguyễn Thị Diệu, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh</p>
          <p><span className="material-icons">phone</span> Liên hệ giờ hành chính: <span className="material-icons">phone</span> 028 39571342, <span className="material-icons">phone</span> 028 39557858</p>

          <p><strong>TT truyền máu Chợ Rẫy</strong></p>
          <p><span className="material-icons">location_on</span> 56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh</p>
          <p><span className="material-icons">phone</span> Liên hệ giờ hành chính: <span className="material-icons">phone</span> 028 39555885</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
