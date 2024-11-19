import React, { useState } from 'react';
import './Step4.css'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Step4 = () => {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // Trạng thái để hiển thị mật khẩu

  const validatePassword = (value) => {
    const hasMinLength = value.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    setIsPasswordValid(hasMinLength && hasLetter && hasNumber);
    setPassword(value);
  };

  const handleCreateAccount = () => {
    if (isPasswordValid) {
      console.log('Tạo tài khoản với mật khẩu:', password);
      // Logic tạo tài khoản ở đây
    }
  };

  return (
    <div className="create-account-container">
      <h2>Đăng ký</h2>
      <p className="password-description">Thiết lập mật khẩu</p>
      <p className="password-note">
        Tạo mật khẩu để đăng nhập vào tài khoản của bạn
      </p>
      <p>
      <span className="icon">⚠️</span> 
      Lưu ý: Mật khẩu phải chứa tối thiểu 8 ký tự, bao gồm chữ và số
      </p>

      <div className="password-input">
        <label htmlFor="password">Mật khẩu mới*</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'} // Tùy chỉnh loại ô nhập
            id="password"
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
            className={!isPasswordValid ? 'invalid' : ''}
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)} // Bật/tắt hiển thị mật khẩu
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Thay đổi icon */}
          </span>
        </div>
        {!isPasswordValid && (
          <p className="error-message">Mật khẩu không hợp lệ!</p>
        )}
      </div>

      <button onClick={handleCreateAccount} disabled={!isPasswordValid}>
        Tạo tài khoản
      </button>
    </div>
  );
};

export default Step4;
