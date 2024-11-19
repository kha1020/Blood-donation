import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Nhập Link và useNavigate từ React Router
import { useAuthContext } from '../context/UserContext';
import './Login.css';
 

const Login = () => {
  const { login } = useAuthContext(); // Hàm login từ AuthContext
  const [cccd, setCCCD] = useState(''); // Trạng thái CCCD
  const [password, setPassword] = useState(''); // Trạng thái mật khẩu
  const [error, setError] = useState(''); // Thông báo lỗi
  const [showPassword, setShowPassword] = useState(false); // Kiểm tra xem mật khẩu có hiện hay không
  const navigate = useNavigate(); // Hook để điều hướng trang

  // Tài khoản mặc định để kiểm tra đăng nhập
  const defaultAccount = {
    cccd: '123456789', // CCCD của tài khoản mặc định
    password: '12345', // Mật khẩu của tài khoản mặc định
  };

  // Hàm xử lý đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cccd === '' || password === '') {
      setError('CCCD và mật khẩu không được để trống');
      return;
    }

    // Kiểm tra thông tin đăng nhập với tài khoản mặc định
    if (cccd === defaultAccount.cccd && password === defaultAccount.password) {
      console.log('Đăng nhập thành công với CCCD:', cccd);
      setError('');
       // Giả sử bạn có hàm login trong AuthContext

      login('Phạm Đinh Anh Kha', '')
      // Chuyển hướng đến trang chính và gửi thông báo thành công
      navigate('/home', { state: { message: 'Đăng nhập thành công!' } });
    } else {
      setError('Thông tin đăng nhập không chính xác'); // Thông báo lỗi
    }
  };

  // Hàm toggle để hiển thị/ẩn mật khẩu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Số CMND/CCCD/Hộ Chiếu*:</label>
            <input
              type="text"
              value={cccd} // Thay đổi email thành cccd
              onChange={(e) => setCCCD(e.target.value)} // Đổi setEmail thành setCCCD
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          {error && <p className="error">{error}</p>} {/* Hiển thị lỗi nếu có */}
          <button type="submit">Đăng nhập</button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Quên mật khẩu?</a>
        </div>
        <div className="register">
          <p>Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p> {/* Sử dụng Link */}
        </div>
      </div>
    </div>
  );
};

export default Login;
