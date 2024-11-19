import React, { useState } from 'react';
import './Step2.css';

const Step2 = ({ handleStepChange }) => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [landline, setLandline] = useState('');

  const handleNext = () => {
    // Thêm logic xác thực nếu cần
    handleStepChange(3); // Chuyển sang Step3
  };

  return (
    <div>
      <h2>Hồ Sơ Người Hiến Máu</h2>
      <p>Vui lòng nhập thông tin người hiến máu để hoàn thành hồ sơ người hiến máu.</p>

      <div className="form-group">
        <label htmlFor="mobile">Điện thoại di động (*)</label>
        <input
          type="tel"
          id="mobile"
          placeholder="VD: 0909090909"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{10}"
          required
        />
        <small>Số điện thoại của bạn hoặc bất kỳ số nào mà chúng tôi có thể liên lạc. Số điên thoại di động gồm 10 chữ số.</small>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email (*)</label>
        <input
          type="email"
          id="email"
          placeholder="Vui lòng nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <small>Vui lòng cung cấp địa chỉ email để xác thực tài khoản và nhận kết quả máu. Email phải đúng theo định dạng: emailnguoihienmau@gmail.com.</small>
      </div>

      <div className="form-group">
        <label htmlFor="occupation">Nghề nghiệp (*)</label>
        <select
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        >
          <option value="">Chọn nghề nghiệp</option>
          <option value="software_engineer">Kỹ sư phần mềm</option>
          <option value="doctor">Bác sĩ</option>
          <option value="teacher">Giáo viên</option>
          <option value="construction_engineer">Kỹ sư xây dựng</option>
          <option value="sales_staff">Nhân viên bán hàng</option>
          <option value="journalist">Nhà báo</option>
          <option value="project_manager">Quản lý dự án</option>
          <option value="marketing_specialist">Chuyên viên marketing</option>
          <option value="graphic_designer">Thiết kế đồ họa</option>
          <option value="accountant">Kế toán</option>
          <option value="customer_service">Nhân viên chăm sóc khách hàng</option>
          <option value="network_engineer">Kỹ sư mạng</option>
          <option value="cyber_security_specialist">Chuyên viên an ninh mạng</option>
          <option value="finance_specialist">Chuyên viên tài chính</option>
          <option value="programmer">Lập trình viên</option>
          <option value="data_analyst">Chuyên viên phân tích dữ liệu</option>
          <option value="fashion_designer">Nhà thiết kế thời trang</option>
          <option value="online_sales_specialist">Chuyên viên bán hàng trực tuyến</option>
          <option value="automotive_engineer">Kỹ sư ô tô</option>
          <option value="psychologist">Nhà tâm lý học</option>
        </select>
        <small>Vui lòng chọn thông tin nghề nghiệp.</small>
      </div>

      <div className="form-group">
        <label htmlFor="landline">Điện thoại bàn</label>
        <input
          type="tel"
          id="landline"
          placeholder="VD: 02809090909"
          value={landline}
          onChange={(e) => setLandline(e.target.value)}
          pattern="[0-9]{11}"
        />
        <small>Số điên thoại bàn mà chúng tôi có thể liên hệ với bạn (nếu có). Số điên thoại bàn gồm 11 chữ số.</small>
      </div>

      <div className="button-container-step2">
        <button className="back-button" onClick={() => handleStepChange(1)}>Quay về</button>
        <button className="next-button" onClick={handleNext}>Tiếp theo</button>
      </div>
    </div>
  );
};

export default Step2;
