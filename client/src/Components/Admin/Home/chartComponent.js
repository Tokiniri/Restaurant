import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrer les composants nécessaires auprès de ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Count',
        data: data.values,
        backgroundColor: data.colors || [], // Assurez-vous que data.colors est défini
        borderColor: (data.colors || []).map(color => color), // Utiliser la même couleur pour les bordures
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distribution des catégories',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ChartComponent;
