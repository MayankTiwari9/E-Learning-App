import React from "react";
import DocumentaionNav from "./DocumentaionNav";
import { useParams } from "react-router-dom";
import data from "../../JSONData/documentation.json";

const DocumentationCard = () => {
  const params = useParams();
  const language = params.language.toLowerCase();
  const documentation = data[language];

  return (
    <div>
      <DocumentaionNav />
      <div className="accordion w-75 mx-auto mt-5 mb-5" id="accordionPanelsStayOpenExample">
        {documentation.map((item, index) => (
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
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            >
              <div className="accordion-body">
                {item.description}
                <div className="card-body">
                  <h5 className="card-title">Example:- </h5>
                  <p className="card-text">{item.example}</p>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Explanation:- </h5>
                  <p className="card-text">{item.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationCard;
