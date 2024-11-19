import React, { useState } from 'react';
import './Step1.css';
import provincesData from './provincesData';

const Step1 = ({ handleStepChange }) => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [streetAddress, setStreetAddress] = useState(''); // Thêm state cho số nhà / tên đường
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [fullAddress, setFullAddress] = useState(''); // Thêm state cho địa chỉ tổng hợp
  const [documentType, setDocumentType] = useState(''); // Thêm state cho loại giấy tờ
  const [idNumber, setIdNumber] = useState(''); // Thêm state cho số căn cước công dân
  const [fullName, setFullName] = useState(''); // Thêm state cho họ và tên
  const [birthDate, setBirthDate] = useState(''); // Thêm state cho ngày sinh
  const [gender, setGender] = useState(''); // Thêm state cho giới tính

  // Xử lý khi chọn tỉnh
  const handleProvinceChange = (event) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setDistricts(provincesData[province]?.districts || []); // Lấy danh sách quận/huyện từ tỉnh đã chọn
    setSelectedDistrict(''); // Reset quận/huyện khi thay đổi tỉnh
    setWards([]); // Reset phường/xã khi thay đổi tỉnh
    setFullAddress(''); // Reset địa chỉ tổng hợp khi thay đổi tỉnh
  };

  // Xử lý khi chọn quận/huyện
  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    const selectedDistrictObject = districts.find((d) => d.value === district);
    setWards(selectedDistrictObject?.wards || []); // Lấy danh sách phường/xã từ quận/huyện đã chọn
    setSelectedWard(''); // Reset phường/xã khi thay đổi quận/huyện
    setFullAddress(''); // Reset địa chỉ tổng hợp khi thay đổi quận/huyện
  };

  // Xử lý khi chọn phường/xã
  const handleWardChange = (event) => {
    setSelectedWard(event.target.value);
    setFullAddress(''); // Reset địa chỉ tổng hợp khi thay đổi phường/xã
  };

  // Xử lý khi nhập số nhà / tên đường
  const handleStreetAddressChange = (event) => {
    setStreetAddress(event.target.value);
  };

  // Cập nhật địa chỉ tổng hợp khi bấm nút Xác nhận
  const handleConfirm = () => {
    const address = `${streetAddress}, ${selectedWard}, ${selectedDistrict}, ${selectedProvince}`.replace(/_/g, ' ');
    setFullAddress(address);
    handleStepChange(2); // Chuyển sang bước tiếp theo
  };

  return (
    <div>
      <h2>Nhập thông tin giấy tờ</h2>
      <p className="instruction">
        Vui lòng nhập thông tin trên giấy tờ và bấm <strong>“xác nhận”</strong> để hoàn thành.
      </p>

      {/* Chọn loại giấy tờ */}
      <div className="form-group">
        <label>Chọn loại giấy tờ</label>
        <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
          <option value="">Tên giấy tờ</option>
          <option value="cccd">Căn cước công dân</option>
        </select>
      </div>

      {/* Số căn cước công dân */}
      <div className="form-group">
        <label>
          {documentType === 'cccd' ? 'Số căn cước công dân (*)' : ''}
        </label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          placeholder='Nhập đầy đủ 09 chữ số được in trên căn cước'
        />
        <small>
          'VD: 123456789'
        </small>
      </div>

      {/* Họ và tên */}
      <div className="form-group">
        <label>Họ và tên (*)</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nhập họ và tên đầy đủ theo căn cước công dân"
        />
        <small>VD: Nguyễn Văn A</small>
      </div>

      {/* Ngày sinh */}
      <div className="form-group">
        <label>Ngày sinh (*)</label>
        <input
          type="text"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="Nhập ngày tháng năm sinh theo định dạng: Ngày/Tháng/Năm"
        />
        <small>VD: 01/01/1900</small>
      </div>

      {/* Giới tính */}
      <div className="form-group">
        <label>Giới tính (*)</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Chọn giới tính</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
      </div>

      {/* Địa chỉ thường trú */}
      <div className="form-group">
        <h3>Địa chỉ thường trú (*)</h3> {/* Tiêu đề cho nhóm địa chỉ */}
        <label>Tỉnh/Thành phố</label>
        <select value={selectedProvince} onChange={handleProvinceChange}>
          <option value="">Chọn tỉnh/thành phố</option>
          {Object.keys(provincesData).map(provinceKey => (
            <option key={provinceKey} value={provinceKey}>
              {provinceKey.replace(/_/g, ' ')} {/* Hiển thị tên tỉnh/thành phố */}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Quận/Huyện</label>
        <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedProvince}>
          <option value="">Chọn quận/huyện</option>
          {districts.map(district => (
            <option key={district.value} value={district.value}>
              {district.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Phường/Xã</label>
        <select value={selectedWard} onChange={handleWardChange} disabled={!selectedDistrict}>
          <option value="">Chọn phường/xã</option>
          {wards.map(ward => (
            <option key={ward.value} value={ward.value}>
              {ward.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Số nhà / Tên đường</label>
        <input
          type="text"
          value={streetAddress}
          onChange={handleStreetAddressChange}
          placeholder="Nhập số nhà, tên đường"
        />
      </div>

      <div className="form-group">
        <label>Địa chỉ đã chọn</label>
        <input
          type="text"
          value={fullAddress}
          readOnly
          placeholder="Địa chỉ sẽ hiển thị ở đây sau khi xác nhận"
        />
      </div>

      <div className="button-container-step1">
        <button className="back-button" onClick={() => handleStepChange(0)}>Quay về</button>
        <button className="next-button" onClick={handleConfirm}>Xác nhận</button>
      </div>
    </div>
  );
};

export default Step1;
