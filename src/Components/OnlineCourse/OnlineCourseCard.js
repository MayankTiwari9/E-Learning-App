import React from "react";
import { useParams } from "react-router-dom";
import data from "../../JSONData/onlineCourse.json";
import OnlineCourseNav from "./OnlineCourseNav";

const OnlineCourseCard = () => {
  const params = useParams();
  const language = params.language.toLowerCase();
  const onlineCourse = data[language];

  return (
    <div>
      <OnlineCourseNav />
      <div
        className="accordion w-75 mx-auto mt-5 mb-5"
        id="accordionPanelsStayOpenExample"
      >
        {onlineCourse.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse-${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`panelsStayOpen-collapse-${index}`}
              >
                {item.topic}
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse-${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                {item.description}
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe
                    title={item.description}
                      className="embed-responsive-item w-100"
                      style={{height: "500px"}}
                      src={item.video}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        ))}
      </div>
    </div>
  );
};

export default OnlineCourseCard;
