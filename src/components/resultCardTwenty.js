import React from 'react';

const ResultCardTwenty = ({income}) => {
    return (
        <div className="card">
            <h2>{income} of your Income</h2>
            <p>Sould be going towards your</p>
            <p className="category"><strong>Savings/Debt</strong></p>
        </div>
    )
}

export default ResultCardTwenty;