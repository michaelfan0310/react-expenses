import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setTitle]=useState('');
    const [enteredAmount, setAmount]=useState('');
    const [enteredDate, setDate]=useState('');

    function titleChangeHDL(event){
          setTitle(event.target.value);
    };
    function amountChangeHDL(event){
          setAmount(event.target.value);
    };
    function dateChangeHDL(event){
          setDate(event.target.value);
    };
    
    
    function submitHDL(event){
         event.preventDefault();
      const submitData={
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
      };
        
      props.onSaveData(submitData);
      
    }
    return(
        <form onSubmit={submitHDL}>    
           <div className='new-expense__controls'>
           <div className='new-expense__control'>
                <lable >Title</lable>
                <input type="text" onChange={titleChangeHDL}/>
           </div>
           <div className='new-expense__control'>
                <lable >Amount</lable>
                <input type="number" 
                min="0.01" step="0.01" 
                onChange={amountChangeHDL}/>
           </div>
            <div className='new-expense__control'>
                <lable >date</lable>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHDL}/>
           </div>
           <div className="new-expense__actions">
           <button type='button' onClick={props.onCancel}>Cancel</button>
           <button type='submit'>Add Expense</button>
           </div>
           </div>
        </form>
    );

};

export default ExpenseForm;