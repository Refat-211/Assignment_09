import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    const topicsArr = topics.data;
    // console.log(topicsArr);
    return (
      <div>
        <h2 className='text-white text-4xl'>Choose your quiz type</h2>
        <div>
            <div>
                {
                    topicsArr.map(topic => (
                        <Topic key={topic.id} topic={topic}></Topic>
                    ))
                }
            </div>
        </div>
      </div>
    );
};

export default Topics;