import React from 'react';

const Form = ({setIncome, setThirtyIncome, setTwentyIncome, setFiftyIncome, income}) => {

    const handleNumberInput = (e) => {
        const formIncome = parseFloat(e.target.value)
        setIncome(formIncome)
    }

    const submitIncomeHandler = (e) => {
        e.preventDefault();
        
        const setFifty = parseFloat(income * .5).toFixed(2)
        const setThirty = parseFloat(income * .33).toFixed(2)
        const setTwenty = parseFloat(income * .2).toFixed(2)
        
        setFiftyIncome("$" + setFifty)
        setThirtyIncome("$" + setThirty)
        setTwentyIncome("$" + setTwenty)
    }

    return (
        <form>
            <label>Enter your net-income here</label>
            <input className="text-input" onChange={handleNumberInput} type='number' min="0.01" max='10000.00' step="0.01" />
            <button className="submit-btn" onClick={submitIncomeHandler}>
                Submit
            </button>
        </form>
    )
}

export default Form;