import React, { useEffect, useRef } from "react";
import WordCloud from "wordcloud";

const processData = (jsonData) => {
  // Assuming 'children' is the array of comments from the Reddit data
  const { children } = jsonData.data;

  const subredditArray = [];
  children.forEach((comment) => {
    const subreddit = comment.data.subreddit;
    subredditArray.push(subreddit);
  });

  return subredditArray;
};

const WordCloudComponent = ({ jsonData }) => {
  const words = processData(jsonData);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const wordCounts = {};
      words.forEach((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      });

      const wordCloudData = Object.keys(wordCounts).map((key) => [
        key,
        wordCounts[key],
      ]);
      WordCloud(canvasRef.current, {
        list: wordCloudData,
        weightFactor: 10,
        gridSize: 5,
        origin: [0, 0],
        shrinkToFit: true,
        minSize: 6
      }); // , weightFactor: 3, minSize: 36
    }
  }, [words]); // Redraw word cloud if 'words' prop changes

  return <canvas ref={canvasRef} width="500" height="500"></canvas>;
};

export default WordCloudComponent;
