import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

// const { children } = jsonData.data;

// return (
//     <div>
//         {children.map((child, index) => (
//             <div key={index}>
//                 <p>Created UTC: {child.data.created_utc}</p>
//             </div>
//         ))}
//     </div>
// );

const processData = (jsonData) => {
    // Assuming 'children' is the array of comments from the Reddit data
    const { children } = jsonData.data;

    const commentCountPerHour = {};
    children.forEach(comment => {
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
        labels: Object.keys(data).map(hour => `${hour}:00`),
        datasets: [{
        label: 'Number of Comments per Hour',
        data: Object.values(data),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        }]
    };

    const chartOptions = {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    };

    return <Bar data={chartData} options={chartOptions} />;
};

export default CommentsChart; 

