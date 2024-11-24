import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventsPage.css';

import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.gif';

const eventsData = [
    {
      id: 1,
      name: "Hiến máu nhân đạo tại Đà Nẵng",
      date: "2024-12-01 08:00",
      location: "Nhà Văn Hóa Thanh Niên, Đà Nẵng",
      status: "Sắp diễn ra",
      registered: 30,
      needed: 50,
      banner: banner1,
    },
    {
      id: 2,
      name: "Hiến máu cứu người tại Hà Nội",
      date: "2024-11-20 09:00",
      location: "Trung tâm Hội nghị Quốc gia, Hà Nội",
      status: "Đang diễn ra",
      registered: 45,
      needed: 50,
      banner: banner2,
    },
    {
      id: 3,
      name: "Chương trình hiến máu tại TP.HCM",
      date: "2024-11-10 07:30",
      location: "Sân vận động Thống Nhất, TP.HCM",
      status: "Đã kết thúc",
      registered: 50,
      needed: 50,
      banner: banner3,
    },
  ];
  
const EventsPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredEvents = eventsData.filter((event) => {
    const matchLocation =
      filters.location === "" || event.location.includes(filters.location);
    const matchDate =
      filters.date === "" || event.date.startsWith(filters.date);
    const matchStatus =
      filters.status === "" || event.status === filters.status;
    return matchLocation && matchDate && matchStatus;
  });

  return (
    <div className="events-page">
      <h1>Sự Kiện Hiến Máu</h1>
      <div className="filters">
        <input
          type="text"
          name="location"
          placeholder="Địa điểm"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
        />
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="">Tất cả trạng thái</option>
          <option value="Sắp diễn ra">Sắp diễn ra</option>
          <option value="Đang diễn ra">Đang diễn ra</option>
          <option value="Đã kết thúc">Đã kết thúc</option>
        </select>
      </div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            <img src={event.banner} alt={event.name} />
            <div className="event-info">
              <h2>{event.name}</h2>
              <p>Thời gian: {event.date}</p>
              <p>Địa điểm: {event.location}</p>
              <p>Trạng thái: {event.status}</p>
              <p>
                Số người đăng ký: {event.registered}/{event.needed}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
