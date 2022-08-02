import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        //------------------------below approach is more foolproof-----------------------------
        // setUserInput((prevState) => {
        //     return { ...prevState, title: event.target.value};
        // });
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    let formContent = (<button type="submit" onClick={() => setIsFormOpen(true)}>Add New Expense</button>);

    if(isFormOpen === true){
        formContent = (
            <div>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler} />
                </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={() => setIsFormOpen(false)}>Cancel</button>
                    <button type="submit" onClick={submitHandler}>Add Expense</button>
                </div>
            </div>
        );
    }

    return (
        <form>
            {formContent}
        </form>
    );
}

export default ExpenseForm;