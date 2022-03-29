import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
     const [filteredYear, setYear]=useState('2020');

    function filterChangeHDL(selectedYear){
        // console.log('expenses.js');
        setYear(selectedYear);
    };
    const filteredExpenses=props.items.filter(expense=>{
     return expense.date.getFullYear().toString()===filteredYear;
    })

return(<Card className='expenses'>
        
       <ExpensesFilter selected={filteredYear}          
       onChangeFilter={filterChangeHDL}/>
       <ExpensesChart expenses={filteredExpenses} />
       {filteredExpenses.length===0 && <p>No Expense Fonund</p>}
       {filteredExpenses.length>0 && filteredExpenses.map(expense=>(
         <ExpenseItem 
           key={expense.id} //always added
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />))}
      
   
     </Card>
);


}
export default Expenses;