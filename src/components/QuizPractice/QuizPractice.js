import React from 'react';
import Swal from "sweetalert2";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuizPractice = ({ quiz, questionData, idx }) => {
  const { options, correctAnswer, question } = questionData;
  const [option1, option2, option3, option4] = options;
  //   console.log(questionData);

  const validationAns = (option) => {
    if (option === correctAnswer) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Wow, your ans is Correct !",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    //
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your ans is incorrect !",
      });
    }
  };

  const seeAns = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Ans: ${correctAnswer}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <h4 className="text-start text-info">
        Quiz: <span className="text-danger">{idx + 1}</span>
      </h4>
      <div>
        <div className="card border-0 shadow-lg mb-5 ">
          <div className="p-4">
            <div className="d-flex p-3 justify-content-between">
              <div className="question">
                <h5 className="card-title text-start">{question}</h5>
              </div>
              <div className="d-flex">
                <div className="me-2">
                  <small>Ans</small>
                </div>
                <div onClick={seeAns} className="eyeIcon-div">
                  <EyeIcon className="icon-eye" />
                </div>
              </div>
            </div>
            <form className="text-start">
              <div className="radio my-2">
                <label className="shadow-sm px-5 py-3 rounded-2 w-100">
                  <input
                    type="radio"
                    value={option1}
                    name="quiz"
                    className="mx-2 "
                    onClick={() => validationAns(option1)}
                  />
                  {option1}
                </label>
              </div>
              <div className="radio my-2">
                <label className="shadow-sm px-5 py-3 rounded-2 w-100">
                  <input
                    type="radio"
                    value={option2}
                    name="quiz"
                    className="mx-2"
                    onClick={() => validationAns(option2)}
                  />
                  {option2}
                </label>
              </div>
              <div className="radio my-2">
                <label className="shadow-sm px-5 py-3 rounded-2 w-100">
                  <input
                    type="radio"
                    value={option3}
                    name="quiz"
                    className="mx-2"
                    onClick={() => validationAns(option3)}
                  />
                  {option3}
                </label>
              </div>
              <div className="radio my-2">
                <label className="shadow-sm px-5 py-3 rounded-2 w-100">
                  <input
                    type="radio"
                    value={option4}
                    name="quiz"
                    className="mx-2 "
                    onClick={() => validationAns(option4)}
                  />
                  {option4 ? option4 : "none of the above"}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPractice;
