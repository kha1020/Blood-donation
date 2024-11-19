import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { toast } from 'react-toastify';

// Đăng ký các phần của Chart.js
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

// Component để hiển thị tổng quan về hoạt động hiến máu
const SummaryItem = ({ title, value }) => (
  <div className="summary-item">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const Dashboard = () => {
  // State để lưu trữ dữ liệu thống kê
  const [bloodDonations, setBloodDonations] = useState(0);
  const [registrations, setRegistrations] = useState(0);
  const [bloodCollected, setBloodCollected] = useState(0);

  // State cho biểu đồ thống kê
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Số lượng người hiến máu',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  });

  // State cho cảnh báo
  const [warning, setWarning] = useState('');

  // Giả lập việc lấy dữ liệu
  const fetchData = useCallback(() => {
    // Giả lập dữ liệu từ API hoặc database
    setBloodDonations(1500);
    setRegistrations(1200);
    setBloodCollected(800);

    // Cập nhật dữ liệu cho biểu đồ
    setChartData({
      labels: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4', 'Ngày 5'],
      datasets: [
        {
          label: 'Số lượng người hiến máu',
          data: [100, 150, 200, 300, 400],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    });

    // Kiểm tra cảnh báo về số lượng máu
    if (bloodCollected < 1000) {
      setWarning('Cảnh báo: Số lượng máu hiện tại rất thấp!');
      toast.warning('Cảnh báo: Số lượng máu hiện tại rất thấp!');
    }

    // Giả lập thông báo cho các sự kiện sắp tới
    toast.info('Sự kiện hiến máu tiếp theo vào ngày 30/11!');
  }, [bloodCollected]);

  // Gọi fetchData khi component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="dashboard-container">
      <h1>Bảng Điều Khiển</h1>

      {/* Tổng quan về các hoạt động hiến máu */}
      <div className="summary">
        <SummaryItem title="Số lượng người hiến máu" value={bloodDonations} />
        <SummaryItem title="Số lượng đơn đăng ký" value={registrations} />
        <SummaryItem title="Số lượng máu đã thu được (ml)" value={bloodCollected} />
      </div>

      {/* Biểu đồ thống kê */}
      <div className="chart-container">
        <h3>Thống kê về số lượng người hiến máu theo thời gian</h3>
        <Line data={chartData} />
      </div>

      {/* Cảnh báo và thông báo */}
      {warning && <div className="warning">{warning}</div>}
    </div>
  );
};

export default Dashboard;
