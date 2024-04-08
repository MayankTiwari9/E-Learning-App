import React, { useState, useEffect } from "react";
import data from "../../test.json";
import { useParams } from "react-router-dom";

const MockTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const params = useParams();

  const language = params.language.toLowerCase();

  useEffect(() => {
    const shuffledQuestions = shuffleArray(data[language]).slice(0, 5);
    setQuestions(shuffledQuestions);
  }, [language]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedOption(null);
  };

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((selectedOption, index) => {
      if (selectedOption === questions[index].correctAnswer) {
        score++;
      }
    });
    setResult(score);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
  {result === null ? (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{language.charAt(0).toUpperCase() + language.slice(1)} Test</h1>
        <p className="card-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <h3>{currentQuestion && currentQuestion.question}</h3>
        <ul className="list-group">
          {currentQuestion &&
            currentQuestion.options.map((option, index) => (
              <li key={index} className="list-group-item">
                <label className="form-check-label">
                  <input
                    type="radio"
                    name="answer"
                    value={index}
                    onChange={() => handleAnswer(index)}
                    checked={selectedOption === index}
                    className="form-check-input"
                  />
                  {option}
                </label>
              </li>
            ))}
        </ul>
        <div>
          {currentQuestionIndex > 0 && (
            <button className="btn btn-secondary mr-2" onClick={handlePreviousQuestion}>Previous Question</button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button className="btn btn-primary mr-2" onClick={handleNextQuestion}>Next Question</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button className="btn btn-success" onClick={calculateScore}>Finish Test</button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Test Result</h1>
        <p className="card-text">
          Your score: {result} / {questions.length}
        </p>
      </div>
    </div>
  )}
</div>
  );
};

export default MockTest;
