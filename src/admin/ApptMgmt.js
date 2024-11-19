import React, { useState } from 'react';
import './ApptMgmt.css';

const ApptMgmt = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Lịch hẹn 1', status: 'Chưa xác nhận' },
    { id: 2, name: 'Lịch hẹn 2', status: 'Đã xác nhận' },
  ]);

  // Hàm xử lý cập nhật
  const handleUpdate = (id) => {
    alert(`Cập nhật lịch hẹn: ${id}`);
    // Logic cập nhật lịch hẹn sẽ được thêm ở đây (mở form cập nhật, v.v.)
  };

  // Hàm xử lý xóa
  const handleDelete = (id) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(newAppointments);
    alert(`Đã xóa lịch hẹn: ${id}`);
  };

  return (
    <div className="appt-mgmt-container">
      <h2 className="appt-mgmt-title">Danh sách lịch hẹn</h2>

      <table className="appt-mgmt-table">
        <thead>
          <tr>
            <th>Lịch Hẹn</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.status}</td>
                <td>
                  <button
                    className="appt-mgmt-btn update-btn"
                    onClick={() => handleUpdate(appointment.id)}
                  >
                    Update
                  </button>
                  <button
                    className="appt-mgmt-btn delete-btn"
                    onClick={() => handleDelete(appointment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="appt-mgmt-empty">
                Không có lịch hẹn nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApptMgmt;
