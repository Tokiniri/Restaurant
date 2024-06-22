import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const CircularChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '300px', width: '300px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default CircularChart;
