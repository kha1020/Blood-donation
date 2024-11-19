import React, { useState } from 'react';
import './AccountMgmt.css';

const AccountMgmt = () => {
  // Dummy data for accounts
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Nguyễn Văn A', role: 'Nhân viên', permissions: ['Quản lý tài khoản'] },
    { id: 2, name: 'Trần Thị B', role: 'Tình nguyện viên', permissions: ['Phân công công việc'] },
    { id: 3, name: 'Lê Minh C', role: 'Quản trị viên', permissions: ['Quản lý tài khoản', 'Xem báo cáo'] },
  ]);

  // State to handle the form for adding a new account
  const [showAddAccountForm, setShowAddAccountForm] = useState(false);
  const [newAccount, setNewAccount] = useState({
    name: '',
    role: 'Nhân viên',
    permissions: [],
  });

  // State to handle which account is being edited for permissions
  const [editingAccount, setEditingAccount] = useState(null);

  // State to handle account deletion confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [accountToDelete, setAccountToDelete] = useState(null);

  // Handle permission change
  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setNewAccount((prevAccount) => ({
      ...prevAccount,
      permissions: checked
        ? [...prevAccount.permissions, name]
        : prevAccount.permissions.filter((permission) => permission !== name),
    }));
  };

  // Save permissions for edited account
  const handleSavePermissions = () => {
    const updatedAccounts = accounts.map((account) =>
      account.id === editingAccount.id
        ? { ...account, permissions: editingAccount.permissions }
        : account
    );
    setAccounts(updatedAccounts);
    setEditingAccount(null); // Close the form
  };

  // Add a new account
  const handleAddAccount = () => {
    const newAccountData = { ...newAccount, id: accounts.length + 1 };
    setAccounts([...accounts, newAccountData]);
    setShowAddAccountForm(false); // Close the form
    setNewAccount({ name: '', role: 'Nhân viên', permissions: [] }); // Reset form
  };

  // Delete the selected account
  const handleDeleteAccount = () => {
    if (accountToDelete) {
      const updatedAccounts = accounts.filter((account) => account.id !== accountToDelete.id);
      setAccounts(updatedAccounts);
      setShowDeleteModal(false); // Close the modal after deletion
      setAccountToDelete(null); // Reset the account to delete
    }
  };

  // Trigger delete modal
  const handleDeleteButtonClick = (account) => {
    setAccountToDelete(account);
    setShowDeleteModal(true);
  };

  // Form for adding a new account
  const renderAddAccountForm = () => (
    <div className="add-account-form">
      <h2>Thêm tài khoản mới</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Tên người dùng</label>
          <input
            type="text"
            value={newAccount.name}
            onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Vai trò</label>
          <select
            value={newAccount.role}
            onChange={(e) => setNewAccount({ ...newAccount, role: e.target.value })}
          >
            <option value="Nhân viên">Nhân viên</option>
            <option value="Tình nguyện viên">Tình nguyện viên</option>
            <option value="Quản trị viên">Quản trị viên</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phân quyền</label>
          <div>
            {['Quản lý tài khoản', 'Phân công công việc', 'Xem báo cáo'].map((permission) => (
              <label key={permission}>
                <input
                  type="checkbox"
                  name={permission}
                  checked={newAccount.permissions.includes(permission)}
                  onChange={handlePermissionChange}
                />
                {permission}
              </label>
            ))}
          </div>
        </div>
        <button type="button" onClick={handleAddAccount} className="save-button">
          Thêm tài khoản
        </button>
        <button
          type="button"
          onClick={() => setShowAddAccountForm(false)}
          className="cancel-button"
        >
          Hủy
        </button>
      </form>
    </div>
  );

  // Render delete confirmation modal
  const renderDeleteModal = () => (
    <div className="delete-modal">
      <h2>Xác nhận xóa tài khoản</h2>
      <p>Bạn có chắc chắn muốn xóa tài khoản này?</p>
      <button onClick={handleDeleteAccount} className="delete-button">Xóa</button>
      <button onClick={() => setShowDeleteModal(false)} className="cancel-button">Hủy</button>
    </div>
  );

  return (
    <div className="account-mgmt-container">
      <h1 className="page-title">Quản lý tài khoản và phân quyền người dùng</h1>

      <div className="content-section">
        <h2>Tạo và quản lý các tài khoản</h2>
        <p>
          Tạo và quản lý các tài khoản của nhân viên, tình nguyện viên hoặc quản trị viên.
          Bạn có thể thêm, sửa, xóa tài khoản người dùng, và xem chi tiết thông tin tài khoản.
        </p>
        <button
          className="add-account-button"
          onClick={() => setShowAddAccountForm(true)} // Show the form when clicked
        >
          Thêm tài khoản mới
        </button>
      </div>

      <div className="content-section">
        <h2>Danh sách tài khoản</h2>
        <table className="accounts-table">
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Vai trò</th>
              <th>Phân quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td>{account.name}</td>
                <td>{account.role}</td>
                <td>
                  {account.permissions.length > 0 ? (
                    account.permissions.join(', ')
                  ) : (
                    <button onClick={() => setEditingAccount(account)}>Cập nhật quyền</button>
                  )}
                </td>
                <td>
                  <button className="edit-button" onClick={() => setEditingAccount(account)}>
                    Sửa
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteButtonClick(account)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form phân quyền cho tài khoản */}
      {editingAccount && (
        <div className="permissions-form">
          <h2>Phân quyền cho tài khoản</h2>
          <p>Chọn các quyền truy cập cho tài khoản này để xác định các tính năng mà họ có thể sử dụng.</p>
          <form>
            {['Quản lý tài khoản', 'Phân công công việc', 'Xem báo cáo'].map((permission) => (
              <div className="form-group" key={permission}>
                <label>
                  <input
                    type="checkbox"
                    name={permission}
                    checked={editingAccount.permissions.includes(permission)}
                    onChange={() => {
                      const updatedPermissions = editingAccount.permissions.includes(permission)
                        ? editingAccount.permissions.filter((p) => p !== permission)
                        : [...editingAccount.permissions, permission];
                      setEditingAccount({ ...editingAccount, permissions: updatedPermissions });
                    }}
                  />
                  {permission}
                </label>
              </div>
            ))}
            <button type="button" onClick={handleSavePermissions} className="save-button">
              Lưu phân quyền
            </button>
            <button
              type="button"
              onClick={() => setEditingAccount(null)}
              className="cancel-button"
            >
              Hủy
            </button>
          </form>
        </div>
      )}

      {/* Show the form for adding an account */}
      {showAddAccountForm && renderAddAccountForm()}

      {/* Render Delete Modal */}
      {showDeleteModal && renderDeleteModal()}
    </div>
  );
};

export default AccountMgmt;
