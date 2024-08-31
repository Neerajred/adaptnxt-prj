import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'WooCommerce Store', value: 1484 },
  { name: 'Shopify Store', value: 1175 }
];

const COLORS = ['#ff6b6b', '#1dd1a1']; // Define colors for each segment

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function SalesPieChart() {
  const totalSales = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div style={{ width: '40%', height: 400, display:"block", backgroundColor:"white", padding:"20px", borderRadius:"8px" }}> 
      <h3>Portion of Sales</h3>
      <ResponsiveContainer width="100%" height="75%"> 
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(1)}%`}
                </text>
              );
            }}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ textAlign: 'center', marginTop: '-75px', fontSize: '18px', fontWeight: 'bold',}}>
        <p style={{margin:0}}>Total</p>
        {totalSales}
      </div>
    </div>
  );
}
