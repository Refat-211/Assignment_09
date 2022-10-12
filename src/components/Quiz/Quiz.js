import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPractice from '../QuizPractice/QuizPractice';

const Quiz = () => {
  const quiz = useLoaderData
  const quizName = quiz.data.name;
  const questions = quiz.data.questions;

  return (
    <div>
      <h2 className="my-5 text-primary">Quiz question of {quizName}</h2>
      <h3 className="text-info">
        Total Quiz: <span className="text-primary">{questions.length}</span>
      </h3>
      {questions.map((questionData, idx) => (
        <QuizPractice>
          key={questionData.id}
          quiz={quiz}
          questionData={questionData}
          idx={idx}
        </QuizPractice>
      ))}
    </div>
  );
};;

export default Quiz;