import React from 'react';
import Swal from "sweetalert2";
import { EyeIcon } from "@heroicons/react/24/solid";
import './QuizPractice.css'

const QuizPractice = ({ quiz, questionData, idx }) => {
  const { options, correctAnswer, question } = questionData;
  const [option1, option2, option3, option4] = options;
//   console.log(correctAnswer);

  const seeAns = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Ans: ${correctAnswer}`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleClickOption = (ans) => {
    // console.log(ans);
    // console.log(correctAnswer);
    if(ans === correctAnswer){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your ans is Correct !",
          showConfirmButton: false,
          timer: 2000,
        });
    }
    else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your ans is incorrect !",
        });
    }
  }

  return (
    <div>
      <h4 className="text-start text-xl text-info">
        Quiz: <span className="text-danger">{idx + 1}</span>
      </h4>
      <div>
        <div className="card border-0 shadow-lg mb-5">
          <div className="p-4">
            <div className="flex p-3 justify-between">
              <div className="question">
                <h5 className="card-title text-start">{question}</h5>
              </div>
              <div className="flex">
                <div className="me-2">
                  <small>Ans</small>
                </div>
                <div onClick={seeAns} className="eyeIcon-div">
                  <EyeIcon className="icon-eye" />
                </div>
              </div>
            </div>
            {
                options.map((option, index) => {
                    return (
                      <div className="form-control" key={index}>
                        <label className="label cursor-pointer">
                          <span className="label-text">{option}</span>
                          <input
                            onChange={() => handleClickOption(option)}
                            type="radio"
                            defaultChecked={false}
                            name="radio-6"
                            className="radio checked:bg-blue-500"
                            // checked
                          />
                        </label>
                      </div>
                    );
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPractice;
