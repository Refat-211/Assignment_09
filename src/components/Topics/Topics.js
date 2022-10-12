import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    const topicsArr = topics.data;
    // console.log(topicsArr);
    return (
      <div>
        <h2 className='text-white my-8 text-4xl'>Choose your quiz type</h2>
        <div className='my-9'>
            <div className='topic-card p-10 bg-slate-500'>
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