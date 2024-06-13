import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            alert("Budget cannot be lower than amount spent so far");
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.symbol}{budget}</span>
            <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
