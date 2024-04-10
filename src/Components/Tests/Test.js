import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  const testTopics = [
    { topic: "Java", image: "https://shorturl.at/mvDO7" },
    { topic: "JavaScript", image: "https://shorturl.at/wKNW5" },
    { topic: "Python", image: "https://shorturl.at/avJX2" },
    { topic: "C", image: "https://shorturl.at/mDVW9" },
    { topic: "Cpp", image: "https://shorturl.at/pzHT3" },
  ];

  const getBestScore = (topic) => {
    const storedBestScore = localStorage.getItem(`${topic.toLowerCase()}_best_score`);
    return storedBestScore ? parseInt(storedBestScore) : 0;
  };

  return (
    <div className="container d-flex justify-content-center w-75 flex-wrap p-2">
      {testTopics.map((item, index) => (
        <div className="card m-4" key={index}>
          <img src={item.image} className="card-img-top" style={{ width: "300px", height: "250px" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.topic}</h5>
            <p className="card-text">Total Questions: 5</p>
            <p className="card-text">Your Best Score: {getBestScore(item.topic)}</p>
            <Link to={`/test/${item.topic}`} className="btn btn-primary">
              Start Test
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
