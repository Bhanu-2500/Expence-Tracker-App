import React, { useState } from 'react'
import ExpenseList from './Components/ExpenseList'
import ExpenseFilter from './Components/ExpenseFilter';
import ExpenseForm from './ExpenseForm';

const App = () => {
  
  const [selectCategory,setSelectedCategory] = useState("");
  const [arr,setArr]=useState([
    {"id": 1, "description": "Groceries", "amount": 50.0, "category": "Food"},
    {"id": 2, "description": "Gas", "amount": 30.0, "category": "Transportation"},
    {"id": 3, "description": "Movie tickets", "amount": 20.0, "category": "Entertainment"},
    {"id": 4, "description": "Electricity bill", "amount": 100.0, "category": "Utilities"},
    {"id": 5, "description": "Dinner with friends", "amount": 70.0, "category": "Food"}
  ]);
  const filteredExpences = selectCategory? arr.filter(e=>e.category===selectCategory):arr;
  return (<>
    <div className='mb-5'><ExpenseForm onSubmit={(data)=>{setArr([...arr,{...data,id:arr.length+1}])}}/></div>
    <hr/>
    <div className='mb-3'>
      <ExpenseFilter onSelection={(category)=>{setSelectedCategory(category)}}/>
    </div>
    <ExpenseList expences={filteredExpences} onDelete={(id)=>{setArr(arr.filter(e=>e.id!==id))}}/>
  </>
  )
}

export default App