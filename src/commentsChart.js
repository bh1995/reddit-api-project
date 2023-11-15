import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, CategoryScale, LineElement, Filler, Tooltip, Legend, LinearScale, BarElement } from 'chart.js';

const processData = (jsonData) => {
  // Assuming 'children' is the array of comments from the Reddit data
  const { children } = jsonData.data;

  const commentCountPerHour = {};
  children.forEach((comment) => {
    // Convert UTC timestamp to a JavaScript Date object
    const date = new Date(comment.data.created_utc * 1000);
    // Get the hour of the day
    const hour = date.getUTCHours(); // using UTC hours
    // Increment the count for this hour
    if (commentCountPerHour[hour]) {
      commentCountPerHour[hour] += 1;
    } else {
      commentCountPerHour[hour] = 1;
    }
  });

  return commentCountPerHour;
};

const CommentsChart = ({ jsonData }) => {
  const data = processData(jsonData);
  const chartData = {
    labels: Object.keys(data).map((hour) => `${hour}:00`),
    datasets: [
      {
        label: "Number of Comments per Hour",
        data: Object.values(data),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  Chart.register(RadialLinearScale, PointElement, CategoryScale, LineElement, Filler, Tooltip, Legend, LinearScale, BarElement);
  return <Bar data={chartData} options={chartOptions} />;
};

export default CommentsChart;
