// src/pages/PreviewPage.js
import React from 'react';
import './Preview.css'

const PreviewPage = () => {
  return (
    <div className="preview-page">
      <h1>Preview</h1>
      <div className="preview-content">
        <p>Xem trước thông tin chi tiết của sinh viên hoặc giảng viên.</p>
        <div className="preview-card">
          <h3>Tên: Nguyễn Văn A</h3>
          <p>Mã sinh viên: 12345</p>
          <p>Khóa học: Công nghệ thông tin</p>
          <p>Đơn vị: Khoa CNTT</p>
          <p>Địa điểm: TP.HCM</p>
        </div>
        {/* Bạn có thể mở rộng trang này để chứa các thông tin chi tiết khác */}
      </div>
    </div>
  );
};

export default PreviewPage;
