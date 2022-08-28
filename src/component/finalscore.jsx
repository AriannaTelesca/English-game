import React from 'react';
import  './popup.css';

const FinalGame = (props) => {
    return (props.trigger) ? (
        <div className='finalPop'>
        <div className='finalGame'>
            <h1>Final Score:</h1>
            {props.children}
        </div>
        </div>

    ) : "";
}

export default FinalGame;