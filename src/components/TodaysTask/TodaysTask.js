import React from 'react';

const TodaysTask = ({task}) => {
    return(
        <div className='task-container'>
            <h2>Your Workout For Today Is:</h2>
            <span>{task}</span>
        </div>
    );
}

export default TodaysTask;