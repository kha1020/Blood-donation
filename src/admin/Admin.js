import React from 'react';
import Sidebar from './Sidebar';
import './Admin.css'


const Admin = ({children}) => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className='main-content'>{children}</div>
    </div>
  );
};

export default Admin;
