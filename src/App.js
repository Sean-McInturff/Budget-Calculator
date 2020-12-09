import React, { useState } from 'react';
import Form from './components/form'
import ResultCardFifty from './components/resultCardFifty';
import ResultCardThirty from './components/resultCardTirty';
import ResultCardTwenty from './components/resultCardTwenty';


function App() {

  const [income, setIncome] = useState(0);
  const [fiftyIncome, setFiftyIncome]= useState("50%");
  const [thirtyIncome, setThirtyIncome] = useState("30%");
  const [twentyIncome, setTwentyIncome] = useState("20%");

  return (
    <main className='App'>
      <h1 className="title">50, 30, 20 Budget calculator</h1>

      <Form 
        setIncome={setIncome}
        setFiftyIncome={setFiftyIncome}
        setThirtyIncome={setThirtyIncome}
        setTwentyIncome={setTwentyIncome}
        income={income}
      />

      <div className="cardsContainer">
        
        <ResultCardFifty
          income={fiftyIncome}
        />

        <ResultCardThirty
          income={thirtyIncome}
        />

        <ResultCardTwenty
          income={twentyIncome}
        />

      </div>
      
    </main>
  );
}

export default App;