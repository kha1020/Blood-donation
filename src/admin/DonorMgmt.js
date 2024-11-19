import React, { useState } from 'react';
import './DonorMgmt.css';

const donorsData = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    cccd: '123456789',
    phone: '0987654321',
    image: 'https://via.placeholder.com/100',
    bloodType: 'A+',
    healthStatus: 'Healthy',
    donationHistory: ['2023-06-15', '2024-01-10'],
  },
  {
    id: 2,
    name: 'Trần Thị B',
    cccd: '987654321',
    phone: '0123456789',
    image: 'https://via.placeholder.com/100',
    bloodType: 'B-',
    healthStatus: 'Healthy',
    donationHistory: ['2023-08-20'],
  },
];

const DonorMgmt = () => {
  const [donors, setDonors] = useState(donorsData);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentDonor, setCurrentDonor] = useState(null);

  // Hàm thêm người hiến máu
  const handleAdd = () => {
    setIsAdding(true);
    setCurrentDonor({
      id: Date.now(),
      name: '',
      cccd: '',
      phone: '',
      image: '',
      bloodType: '',
      healthStatus: '',
      donationHistory: [],
    });
  };

  // Hàm chỉnh sửa thông tin người hiến máu
  const handleEdit = (donor) => {
    setCurrentDonor(donor);
    setIsEditing(true);
  };

  // Hàm xóa người hiến máu
  const handleDelete = (id) => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn xóa người hiến máu này?");
    if (confirmed) {
      setDonors((prevDonors) => prevDonors.filter((donor) => donor.id !== id));
    }
  };

  // Hàm lưu thông tin người hiến máu (thêm hoặc chỉnh sửa)
  const handleSave = (updatedDonor) => {
    if (isAdding) {
      setDonors((prevDonors) => [...prevDonors, updatedDonor]);
    } else {
      setDonors((prevDonors) =>
        prevDonors.map((donor) => (donor.id === updatedDonor.id ? updatedDonor : donor))
      );
    }
    setIsEditing(false);
    setIsAdding(false);
    setCurrentDonor(null);
  };

  // Hàm hủy chỉnh sửa
  const handleCancel = () => {
    setIsEditing(false);
    setIsAdding(false);
    setCurrentDonor(null);
  };

  return (
    <div className="donor-mgmt-container">
      <h2 className="donor-mgmt-title">Danh sách người hiến máu</h2>
      <button onClick={handleAdd} className="add-donor-btn">Thêm người hiến máu</button>
      <div className="donor-list">
        {donors.map((donor) => (
          <div className="donor-item" key={donor.id}>
            <img src={donor.image} alt={`Ảnh của ${donor.name}`} className="donor-image" />
            <div className="donor-info">
              <p className="donor-name">Họ tên: {donor.name}</p>
              <p className="donor-cccd">CCCD: {donor.cccd}</p>
              <p className="donor-phone">SĐT: {donor.phone}</p>
              <p className="donor-blood-type">Nhóm máu: {donor.bloodType}</p>
              <p className="donor-health-status">Tình trạng sức khỏe: {donor.healthStatus}</p>
              <p className="donor-donation-history">
                Lịch sử hiến máu: {donor.donationHistory.join(', ')}
              </p>
            </div>
            <div className="donor-actions">
              <button className="update-btn" onClick={() => handleEdit(donor)}>Update</button>
              <button className="delete-btn" onClick={() => handleDelete(donor.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {(isEditing || isAdding) && (
        <EditModal
          donor={currentDonor}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

const EditModal = ({ donor, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...donor });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-modal-1">
      <h3>{donor.id ? 'Chỉnh sửa thông tin' : 'Thêm người hiến máu'}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Họ tên:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          CCCD:
          <input type="text" name="cccd" value={formData.cccd} onChange={handleChange} />
        </label>
        <label>
          SĐT:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Nhóm máu:
          <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} />
        </label>
        <label>
          Tình trạng sức khỏe:
          <input type="text" name="healthStatus" value={formData.healthStatus} onChange={handleChange} />
        </label>
        <label>
          Lịch sử hiến máu (cách nhau bằng dấu phẩy):
          <input type="text" name="donationHistory" value={formData.donationHistory.join(', ')} onChange={(e) => setFormData({ ...formData, donationHistory: e.target.value.split(', ') })} />
        </label>
        <label>
          URL ảnh:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <div className="edit-action-1">
          <button type="submit">Lưu</button>
          <button type="button" onClick={onCancel}>Hủy</button>
        </div>
      </form>
    </div>
  );
};

export default DonorMgmt;
