// src/pages/AdminPage.js
import React from 'react';
import LineChartComponent from '../components/SalesVsOrdersChart';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => (
  <div className="container mt-5">
    <h1 className="mb-4">Sales and Orders Overview</h1>
    <div className="card">
      <div className="card-body">
        <LineChartComponent />
      </div>
    </div>
  </div>
);

export default AdminPage;
