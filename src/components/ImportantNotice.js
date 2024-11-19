import React from 'react';
import './ImportantNotice.css'; // File CSS riêng cho form

const ImportantNotice = () => {
  return (
    <div className="important-notice-form">
      <h2>Lưu ý quan trọng</h2>
      <ul>
        <li>
          <h3>Ai có thể tham gia hiến máu?</h3>
          <p>Người từ 18 đến 60 tuổi, có sức khỏe tốt, không mắc các bệnh mãn tính hoặc truyền nhiễm.</p>
        </li>
        <li>
          <h3>Ai là người không nên hiến máu?</h3>
          <p>Những người có tiền sử bệnh tim mạch, bệnh truyền nhiễm hoặc sử dụng chất kích thích.</p>
        </li>
        <li>
          <h3>Máu của tôi sẽ được làm những xét nghiệm gì?</h3>
          <p>Máu sẽ được xét nghiệm các bệnh truyền nhiễm như HIV, viêm gan B, viêm gan C và các xét nghiệm khác để đảm bảo an toàn cho người nhận máu.</p>
        </li>
      </ul>
    </div>
  );
};

export default ImportantNotice;
