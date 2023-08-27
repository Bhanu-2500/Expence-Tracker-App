import React from 'react'
import categories from '../Categories,';

function ExpenseList({expences,onDelete}){
  if(expences.length===0){
    return null;
  }

  return (
    <table class="table table-bordered">
    <thead>
      <tr>
        <th className='text-center'>Description</th>
        <th className='text-center'>Amount</th>
        <th className='text-center'>Category</th>
        <th className='text-center'></th>
      </tr>
    </thead>
    <tbody>
    {expences.map((expence)=><tr key={expence.id}>
        <td>{expence.description}</td>
        <td>{expence.amount}</td>
        <td>{expence.category}</td>
        <td className='text-center'><button className='btn btn-outline-danger' onClick={()=>{onDelete(expence.id)}}>delete</button></td>
      </tr>
    )}

    </tbody>
    <tfoot>
      <tr>
        <td className='text-center'>Total</td>
        <td>${expences.reduce((acc,expence)=>expence.amount + acc,0).toFixed(2)}</td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  );
}



export default ExpenseList