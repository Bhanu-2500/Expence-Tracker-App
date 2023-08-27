import React from 'react'
import categories from '../Categories,'

const ExpenseFilter = ({onSelection}) => {
  return (
    <select className='form-select' onChange={(event)=>{onSelection(event.target.value)}}>
        <option value="">All Categories</option>
        {categories.map(category=><option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter