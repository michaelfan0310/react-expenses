import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


function NewExpense(props){
    function saveDataHDL(submitData){
         const expenseData={
               ...submitData,
               id: Math.random().toString()
         }
       props.onAddData(expenseData);
       setClick(false);
    }
     const [isClicked, setClick]=useState(false);

      function NewHDL(){
          return setClick(true);
      };
      function CancelHDL(){
            setClick(false);
      }

    return(<div className='new-expense'>

        {!isClicked && 
        <button onClick={NewHDL}>New</button> }       

        {isClicked && 
        <ExpenseForm onSaveData={saveDataHDL}
            onCancel={CancelHDL}
        /> }
        </div>
    );

};
export default NewExpense;