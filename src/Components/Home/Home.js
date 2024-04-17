import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const languages = [
    { topic: "Java", image: "https://shorturl.at/mvDO7" },
    { topic: "JavaScript", image: "https://shorturl.at/wKNW5" },
    { topic: "Python", image: "https://shorturl.at/avJX2" },
    { topic: "C", image: "https://shorturl.at/mDVW9" },
    { topic: "Cpp", image: "https://shorturl.at/pzHT3" },
  ];

  const onGetStartHandler = () => {
    navigate("/online-course");
  };

  return (
    <>
      <div className="home-container">
        <div className="home-main">
          <h1>
            A <span className="company-name-span">Smart Education </span>is a
            foundation for better future
          </h1>
          <p>
            A learning hub with high expertise and high academic achievements
          </p>
          <button onClick={onGetStartHandler} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
      <div className="home-info">
        <div>
          <h4>5+</h4>
          <p>Total Courses</p>
        </div>
        <div>
          <h4>5+</h4>
          <p>Total Documentation</p>
        </div>
        <div>
          <h4>5+</h4>
          <p>Total Mock Test</p>
        </div>
        <div>
          <h4>250+</h4>
          <p>Registered Users</p>
        </div>
      </div>
      <div className="home-docs">
        <h3 className="home-doc-header">Our Documentations</h3>
        <p className="home-doc-para">
          Our Documentations provides a vast range of theoritical explanation of
          a language, So that you can understand it only by reading it.
        </p>
        <div className="home-docs-card">
          {languages.map((item, index) => (
            <Link key={index} to={`/documentation/${item.topic}`}>
              <div className="card m-2" style={{width: "18rem"}}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.topic}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
