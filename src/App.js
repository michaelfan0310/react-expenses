import React, {useState} from 'react';
// import $ from "jquery";
// import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 15) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }    
  ];

 


function App() {
  const [expenses, setExpenses]=useState(DUMMY_EXPENSES); 
                                          
  function addDataHDL(data){    
      setExpenses([data, ...expenses]);
      //Do I need prevExpense? Check later
        
   };         
 
    
  return (<div>
   <NewExpense onAddData={addDataHDL}/>
   <Expenses items={expenses} />
   </div>
  );
};

export default App;
