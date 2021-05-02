import React from 'react';

const Answer = ({correct, handleNextSubmit, correctName}) => (
    <div id="answer">
        <h4 style={{display: "inline-block", marginRight: '25px'}}>{correct ? 'Correct: ':'Incorrect: '}{correctName}</h4> 
        <button id="next" className="btn btn-primary btn-lg" style={{width: '110px', height: '50px'}} onClick={handleNextSubmit}>Next</button>
    </div>
)

export default Answer;
