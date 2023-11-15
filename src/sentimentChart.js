import { Radar } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, CategoryScale, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import Sentiment from "sentiment";
const sentiment = new Sentiment();

const processData = (jsonData) => {
  // Assuming 'children' is the array of comments from the Reddit data
  const { children } = jsonData.data;
  //
  const categories = {
    "Strongly Positive": 0,
    "Positive": 0,
    "Neutral": 0,
    "Negative": 0,
    "Strongly Negative": 0,
  };
  // Score: Positive numbers indicate positive sentiment, negative for negative sentiment.
  children.forEach((comment) => {
    const result = sentiment.analyze(comment.data.body); // result format: { "score": ,"comparative": ,"calculation": [{}],"tokens": [],"words": [],"positive": [],"negative": [] }
    const score = result.score;

    if (score > 2) categories["Strongly Positive"] += 1;
    else if (score > 0.2) categories["Positive"] += 1;
    else if (score >= -0.2 && score <= 0.2) categories["Neutral"] += 1;
    else if (score < -0.2) categories["Negative"] += 1;
    else categories["Strongly Negative"] += 1;
  });

  return categories;
};

const SentimentChart = ({ jsonData }) => {
  const data = processData(jsonData);
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Sentiment Analysis",
        data: Object.values(data),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  
  Chart.register(RadialLinearScale, PointElement, CategoryScale, LineElement, Filler, Tooltip, Legend);
  return <Radar data={chartData} />;
};

export default SentimentChart;
