import React, { useState } from 'react';
import './DonationCampaignMgmt.css';

const DonationCampaignMgmt = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    date: '',
    location: '',
    bloodNeed: '',
  });

  const [editingCampaignIndex, setEditingCampaignIndex] = useState(null);
  const [editingCampaign, setEditingCampaign] = useState({
    name: '',
    date: '',
    location: '',
    bloodNeed: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateCampaign = () => {
    setCampaigns([...campaigns, newCampaign]);
    setNewCampaign({ name: '', date: '', location: '', bloodNeed: '' });
  };

  // Open form for editing campaign
  const handleEditCampaign = (index) => {
    setEditingCampaignIndex(index);
    setEditingCampaign(campaigns[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedCampaigns = [...campaigns];
    updatedCampaigns[index] = editingCampaign;
    setCampaigns(updatedCampaigns);
    setEditingCampaignIndex(null); // Close edit form
    setEditingCampaign({ name: '', date: '', location: '', bloodNeed: '' }); // Reset edit state
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingCampaign((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeleteCampaign = (index) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
  };

  return (
    <div className="donation-campaign-mgmt">
      <h2>Quản lý đợt hiến máu</h2>

      {/* New Campaign Form */}
      <div className="new-campaign-form">
        <h3>Tạo đợt hiến máu mới</h3>
        <input
          type="text"
          name="name"
          placeholder="Tên đợt hiến máu"
          value={newCampaign.name}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newCampaign.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Địa điểm"
          value={newCampaign.location}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="bloodNeed"
          placeholder="Số lượng máu cần thu thập"
          value={newCampaign.bloodNeed}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateCampaign}>Tạo đợt hiến máu</button>
      </div>

      {/* List of Campaigns */}
      <div className="campaign-list">
        <h3>Danh sách các đợt hiến máu</h3>
        {campaigns.length > 0 ? (
          <ul>
            {campaigns.map((campaign, index) => (
              <li key={index}>
                <div>
                  <strong>{campaign.name}</strong>
                  <p>{campaign.date} - {campaign.location}</p>
                  <p>Cần thu thập: {campaign.bloodNeed} đơn vị máu</p>
                  <button onClick={() => handleEditCampaign(index)}>Chỉnh sửa</button>
                  <button onClick={() => handleDeleteCampaign(index)}>Xóa</button>
                </div>

                {/* Edit Campaign Form */}
                {editingCampaignIndex === index && (
                  <div className="edit-campaign-form">
                    <input
                      type="text"
                      name="name"
                      value={editingCampaign.name}
                      onChange={handleEditInputChange}
                    />
                    <input
                      type="date"
                      name="date"
                      value={editingCampaign.date}
                      onChange={handleEditInputChange}
                    />
                    <input
                      type="text"
                      name="location"
                      value={editingCampaign.location}
                      onChange={handleEditInputChange}
                    />
                    <input
                      type="number"
                      name="bloodNeed"
                      value={editingCampaign.bloodNeed}
                      onChange={handleEditInputChange}
                    />
                    <button onClick={() => handleSaveEdit(index)}>Lưu chỉnh sửa</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Chưa có đợt hiến máu nào.</p>
        )}
      </div>
    </div>
  );
};

export default DonationCampaignMgmt;
