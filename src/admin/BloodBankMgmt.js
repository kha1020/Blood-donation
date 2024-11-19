import React, { useState, useEffect } from 'react';
import './BloodBankMgmt.css';

const BloodBankMgmt = () => {
  const initialBloodData = [
    { bloodType: 'O+', quantity: 50, expirationDate: '2024-12-01', quality: 'Good' },
    { bloodType: 'O-', quantity: 30, expirationDate: '2024-11-20', quality: 'Good' },
    { bloodType: 'A+', quantity: 40, expirationDate: '2024-10-15', quality: 'Expired' },
    { bloodType: 'A-', quantity: 20, expirationDate: '2024-11-10', quality: 'Good' },
    { bloodType: 'B+', quantity: 60, expirationDate: '2024-12-05', quality: 'Good' },
    { bloodType: 'B-', quantity: 15, expirationDate: '2024-11-30', quality: 'Good' },
    { bloodType: 'AB+', quantity: 10, expirationDate: '2024-09-30', quality: 'Expired' },
    { bloodType: 'AB-', quantity: 5, expirationDate: '2024-10-01', quality: 'Expired' },
  ];

  const [bloodInventory, setBloodInventory] = useState(initialBloodData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    expirationDate: '',
    quality: '',
  });

  const checkExpiration = (expirationDate) => {
    const today = new Date();
    const expiration = new Date(expirationDate);
    return today > expiration;
  };

  useEffect(() => {
    setBloodInventory(prevInventory =>
      prevInventory.map(item => ({
        ...item,
        quality: checkExpiration(item.expirationDate) ? 'Expired' : 'Good',
      }))
    );
  }, []);

  const openModal = (item) => {
    setCurrentItem(item);
    setFormData({
      bloodType: item.bloodType,
      quantity: item.quantity,
      expirationDate: item.expirationDate,
      quality: item.quality,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBloodInventory(prevInventory =>
      prevInventory.map(item =>
        item.bloodType === currentItem.bloodType
          ? { ...item, ...formData }
          : item
      )
    );
    closeModal();
  };

  return (
    <div className="blood-bank-management">
      <h2>Blood Bank Management</h2>

      <div className="blood-inventory">
        <h3>Current Blood Inventory</h3>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Quantity (Units)</th>
              <th>Expiration Date</th>
              <th>Quality</th>
              <th>Update Quantity</th>
            </tr>
          </thead>
          <tbody>
            {bloodInventory.map((item, index) => (
              <tr key={index} className={item.quality === 'Expired' ? 'expired' : ''}>
                <td>{item.bloodType}</td>
                <td>{item.quantity}</td>
                <td>{item.expirationDate}</td>
                <td>{item.quality}</td>
                <td>
                  <button onClick={() => openModal(item)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="donation-history">
        <h3>Recent Donation Updates</h3>
        <ul>
          {bloodInventory.map((item, index) => (
            <li key={index}>
              Blood Type {item.bloodType}: {item.quantity} units, Expiry: {item.expirationDate}, Quality: {item.quality}
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Blood Inventory</h3>
            <form onSubmit={handleFormSubmit}>
              <label>Blood Type</label>
              <input
                type="text"
                value={formData.bloodType}
                onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
              />
              <label>Quantity (Units)</label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              />
              <label>Expiration Date</label>
              <input
                type="date"
                value={formData.expirationDate}
                onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
              />
              <label>Quality</label>
              <input
                type="text"
                value={formData.quality}
                onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
              />
              <div className="modal-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodBankMgmt;
