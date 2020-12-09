import React from 'react';

const ResultCardThirty = ( {income} ) => {
    return(
        <div className="card">
            <h2>{income} of your income</h2>
            <p>Sould be going towards things you <strong>Want</strong></p>
        </div>
    )
}

export default ResultCardThirty;