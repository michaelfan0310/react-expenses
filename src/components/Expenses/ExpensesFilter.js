import './ExpensesFilter.css';

function ExpensesFilter(props){
    function dropdownHDL(event){
        props.onChangeFilter(event.target.value);
    }
    return<div className='expenses-filter'>
         <div className='expenses-filter__control'>
       <label>Filter by year</label>
       <select value={props.selected}
       onChange={dropdownHDL}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>          
       </select>
       
    </div>
    </div>
}

export default ExpensesFilter;