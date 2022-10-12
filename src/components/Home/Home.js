import React from 'react';
import './Home.css'
import quiztime from "../../images/quiztimes.png";

const Home = () => {
    return (
      <div>
        <div className="sub-header">
          <img className="p-1 w-full h-80" src={quiztime} alt="" />
          <p className="p-5 text-xl text-white">
            Its quiz time. Lets go, test your tech related knowledge.
          </p>
        </div>
      </div>
    );
};

export default Home;