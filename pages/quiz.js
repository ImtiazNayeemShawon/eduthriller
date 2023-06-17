import React, { useState } from 'react';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
    answer: 'Mars'
  },
  {
    question: 'What is the largest ocean in the world?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean'
  }
];


const QuizApp = () => {
  // if i can get value from "DATA"
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(''));

  
  const handleAnswerClick = (questionIndex, selectedAnswer) => {
    setSelectedAnswers(prevState => {
      const updatedAnswers = [...prevState];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const renderQuiz = () => {
    return quizData.map((question, index) => (
      <div key={index}>
        <h3>{question.question}</h3>
        <ul>
          {question.options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleAnswerClick(index, option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {renderQuiz()}
      <button onClick={() => console.log('Score:', calculateScore())}>Submit</button>
    </div>
  );
};

export default QuizApp;
