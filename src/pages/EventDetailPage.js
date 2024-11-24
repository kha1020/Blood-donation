import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetailPage.css';

const eventsData = [
  {
    id: 1,
    name: "Hiến máu nhân đạo tại Đà Nẵng",
    date: "2024-12-01 08:00",
    location: "Nhà Văn Hóa Thanh Niên, Đà Nẵng",
    status: "Sắp diễn ra",
    registered: 30,
    needed: 50,
    description: "Chương trình hiến máu nhân đạo nhằm cứu giúp các bệnh nhân cần máu.",
    organizerContact: "Nguyễn Văn A - 0901234567",
  },
  {
    id: 2,
    name: "Hiến máu cứu người tại Hà Nội",
    date: "2024-11-20 09:00",
    location: "Trung tâm Hội nghị Quốc gia, Hà Nội",
    status: "Đang diễn ra",
    registered: 45,
    needed: 50,
    description: "Chương trình hiến máu nhân đạo nhằm cứu giúp các bệnh nhân cần máu.",
    organizerContact: "Nguyễn Văn B - 0901234567",
  },
  {
    id: 3,
    name: "Chương trình hiến máu tại TP.HCM",
    date: "2024-11-10 07:30",
    location: "Sân vận động Thống Nhất, TP.HCM",
    status: "Đã kết thúc",
    registered: 50,
    needed: 50,
    description: "Chương trình hiến máu nhân đạo nhằm cứu giúp các bệnh nhân cần máu.",
    organizerContact: "Nguyễn Văn C - 0901234567",
  },
  // Thêm các sự kiện khác tương tự
];

const EventDetailPage = () => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Sự kiện không tồn tại.</div>;
  }

  const handleRegister = () => {
    alert("Bạn đã đăng ký thành công!");
  };

  return (
    <div className="event-detail">
      <h1>{event.name}</h1>
      <p><strong>Thời gian:</strong> {event.date}</p>
      <p><strong>Địa điểm:</strong> {event.location}</p>
      <p><strong>Trạng thái:</strong> {event.status}</p>
      <p><strong>Số người tham gia:</strong> {event.registered}/{event.needed}</p>
      <p><strong>Mô tả:</strong> {event.description}</p>
      <p><strong>Liên hệ tổ chức:</strong> {event.organizerContact}</p>
      <button
        className={`register-btn ${event.registered >= event.needed ? "disabled" : ""}`}
        onClick={event.registered >= event.needed ? null : handleRegister}
      >
        {event.registered >= event.needed ? "Hết chỗ" : "Đăng ký ngay"}
      </button>
    </div>
  );
};

export default EventDetailPage;
