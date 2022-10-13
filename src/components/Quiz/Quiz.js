import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPractice from '../QuizPractice/QuizPractice';

const Quiz = () => {
  const quiz = useLoaderData();
  const quizName = quiz.data.name;
  const questions = quiz.data.questions;
  //   console.log(questions);
  return (
    <div>
      <h2 className="fst-italic my-5 text-3xl text-white">
        Quiz Questions of {quizName}
      </h2>
      <h3 className="text-white text-xl">
        Total Questions: <span className="text-white">{questions.length}</span>
      </h3>
      {questions.map((questionData, idx) => (
        <QuizPractice
          key={questionData.id}
          quiz={quiz}
          questionData={questionData}
          idx={idx}
        ></QuizPractice>
      ))}
    </div>
  );
};

export default Quiz;