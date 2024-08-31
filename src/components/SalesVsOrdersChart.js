import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    date: "2024-06-30 to 2024-07-06",
    orders: 4,
    sales: 1404,
    avgOrderValue: 351
  },
  {
    date: "2024-07-07 to 2024-07-13",
    orders: 2,
    sales: 702,
    avgOrderValue: 351
  },
  {
    date: "2024-07-14 to 2024-07-20",
    orders: 1,
    sales: 351,
    avgOrderValue: 351
  }
];

const SalesVsOrdersChart = () => (
  <div style={{ width: '60%', height: 400, backgroundColor:"white", padding:"20px", borderRadius:"8px" }}>
  <h3>Sales vs Orders</h3>
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      
      {/* Left Y-Axis for Sales */}
      <YAxis yAxisId="left" orientation="left" />

      {/* Right Y-Axis for Orders */}
      <YAxis yAxisId="right" orientation="right" />

      <Tooltip />
      <Legend />

      {/* Line for Sales using left Y-Axis */}
      <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#387908" />

      {/* Line for Orders using right Y-Axis */}
      <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#FF7300" />
      
    </LineChart>
  </ResponsiveContainer>
  </div>
);

export default SalesVsOrdersChart;
