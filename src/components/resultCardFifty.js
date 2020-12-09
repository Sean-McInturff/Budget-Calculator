import React from 'react';

const ResultCardFifty = ({income}) => {

    return(
        <div className="card">
            <h2 >{income} of your income</h2>
            <p>Sould be going towards things you</p>
            <p className="category"><strong>Need</strong></p>
            </div>
    )
}

export default ResultCardFifty;