import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SalesVsOrdersChart from './components/SalesVsOrdersChart';
import InventoryComponent from './components/InventoryComponent';
import OrdersComponent from './components/OrdersComponent';
import SalesPieChart from './components/SalesPieChart';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='main-page'>
        <div className='Navbar-section'>
          <Navbar />
        </div>
        <div className='content-section'>
          <Routes>
            <Route exact path='/dashboard' element={<div style={{display:"flex",gap:"20px", padding:"10px"}}>
            <SalesVsOrdersChart />
            <SalesPieChart />
            </div>} />
            <Route path='/inventory' element={<InventoryComponent />} />
            <Route path='/orders' element={<OrdersComponent />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
