import React, { useState } from 'react';

const BloodRecipientMgmt = () => {
  const [recipients, setRecipients] = useState([]);
//   const [emergencyRequests, setEmergencyRequests] = useState([]);
  const [bloodBankStatus] = useState({
    A_positive: 10,
    A_negative: 5,
    B_positive: 8,
    B_negative: 3,
    AB_positive: 2,
    AB_negative: 1,
    O_positive: 15,
    O_negative: 7,
  });

  const [recipientName, setRecipientName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);

  const handleAddRecipient = (e) => {
    e.preventDefault();
    const newRecipient = {
      name: recipientName,
      bloodType,
      isEmergency,
    };
    setRecipients([...recipients, newRecipient]);
    setRecipientName('');
    setBloodType('');
    setIsEmergency(false);
  };

  const checkBloodAvailability = (bloodType) => {
    return bloodBankStatus[bloodType] > 0;
  };

  return (
    <div className="blood-recipient-mgmt">
      <h2>Quản lý người nhận máu</h2>

      <div className="recipient-form">
        <h3>Thêm người nhận máu</h3>
        <form onSubmit={handleAddRecipient}>
          <label>
            Tên người nhận:
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              required
            />
          </label>
          <label>
            Nhóm máu:
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              required
            >
              <option value="">Chọn nhóm máu</option>
              <option value="A_positive">A+</option>
              <option value="A_negative">A-</option>
              <option value="B_positive">B+</option>
              <option value="B_negative">B-</option>
              <option value="AB_positive">AB+</option>
              <option value="AB_negative">AB-</option>
              <option value="O_positive">O+</option>
              <option value="O_negative">O-</option>
            </select>
          </label>
          <label>
            Yêu cầu khẩn cấp:
            <input
              type="checkbox"
              checked={isEmergency}
              onChange={(e) => setIsEmergency(e.target.checked)}
            />
          </label>
          <button type="submit">Thêm người nhận</button>
        </form>
      </div>

      <div className="recipient-list">
        <h3>Danh sách người nhận máu</h3>
        <ul>
          {recipients.map((recipient, index) => (
            <li key={index}>
              {recipient.name} - {recipient.bloodType} -{' '}
              {recipient.isEmergency ? 'Khẩn cấp' : 'Bình thường'}
              {!checkBloodAvailability(recipient.bloodType) && (
                <span style={{ color: 'red' }}> (Hết máu)</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="blood-bank-status">
        <h3>Tình trạng ngân hàng máu</h3>
        <ul>
          {Object.entries(bloodBankStatus).map(([bloodType, quantity]) => (
            <li key={bloodType}>
              {bloodType}: {quantity} đơn vị máu
              {!checkBloodAvailability(bloodType) && (
                <span style={{ color: 'red' }}> (Hết máu)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BloodRecipientMgmt;
