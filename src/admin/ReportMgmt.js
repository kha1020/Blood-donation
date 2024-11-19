import React, { useState } from 'react';
import './ReportMgmt.css';


const ReportMgmt = () => {
  // States to handle filters and report data
  const [selectedReportType, setSelectedReportType] = useState('monthly');
  const [bloodGroupStats, setBloodGroupStats] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Function to handle report type change
  const handleReportTypeChange = (e) => {
    setSelectedReportType(e.target.value);
  };

  // Function to simulate report generation
  const generateReport = () => {
    setIsGenerating(true);
    // Simulate a delay for generating the report
    setTimeout(() => {
      // Example of generated report data
      setBloodGroupStats([
        { group: 'A', collected: 150, participants: 100 },
        { group: 'B', collected: 120, participants: 80 },
        { group: 'O', collected: 180, participants: 120 },
        { group: 'AB', collected: 90, participants: 60 },
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  // Function to handle export
  const exportReport = (format) => {
    alert(`Exporting report in ${format} format`);
  };

  return (
    <div className="report-mgmt-container">
      <h1 className="page-title">Quản lý báo cáo và thống kê</h1>

      <div className="content-section">
        <h2>Báo cáo tổng quan</h2>
        <p>
          Tạo báo cáo tổng quan về lượng máu thu thập, số người tham gia hiến máu, và lượng máu đã cung cấp.
        </p>
        <div className="report-filter">
          <label htmlFor="report-type">Chọn loại báo cáo:</label>
          <select
            id="report-type"
            value={selectedReportType}
            onChange={handleReportTypeChange}
          >
            <option value="monthly">Hàng tháng</option>
            <option value="quarterly">Hàng quý</option>
            <option value="yearly">Hàng năm</option>
          </select>
        </div>
        <button onClick={generateReport} disabled={isGenerating}>
          {isGenerating ? 'Đang tạo báo cáo...' : 'Tạo báo cáo'}
        </button>
      </div>

      <div className="content-section">
        
        {bloodGroupStats.length > 0 && (
          <table className="stats-table">
            <thead>
              <tr>
                <th>Nhóm máu</th>
                <th>Lượng máu thu thập (ml)</th>
                <th>Số người tham gia</th>
              </tr>
            </thead>
            <tbody>
              {bloodGroupStats.map((stat, index) => (
                <tr key={index}>
                  <td>{stat.group}</td>
                  <td>{stat.collected}</td>
                  <td>{stat.participants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="content-section">
        <h2>Xuất báo cáo</h2>
        <p>
          Xuất báo cáo hàng tháng, hàng quý hoặc hàng năm để theo dõi tiến trình và kết quả.
        </p>
        <div className="export-options">
          <button onClick={() => exportReport('PDF')}>Xuất PDF</button>
          <button onClick={() => exportReport('CSV')}>Xuất CSV</button>
        </div>
      </div>
    </div>
  );
};

export default ReportMgmt;
