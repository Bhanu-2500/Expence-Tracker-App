import React from 'react';
import {z} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from './Categories,';

const schema = z.object({
    description:z.string().min(10,{message:"Description should be at least 10 charctors"}).max(50,{message:"Description should be at most 50 charctors long"}),
    amount:z.number({invalid_type_error:'Amount is required!'}).min(0.01).max(100_000),
    category:z.enum(categories,{
        errorMap:()=>({message:'Category is required!'})
    })
})

const ExpenseForm = (props) => {
   const {register,handleSubmit,formState:{errors},reset}= useForm({resolver:zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit((data)=>{
        props.onSubmit(data);
        reset();
    })}>
        <div className='mb-3'>
            <label  htmlFor='description' className='form-label'>Description</label>
            <input {...register('description')} id='description' type='text' className='form-control'/>
            {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>        
        <div className='mb-3'>
            <label htmlFor='amount' className='form-label'>Amount</label>
            <input {...register('amount',{valueAsNumber:true})} id='amount' type='number' className='form-control'/>
            {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>        
        <div className='mb-3'>
            <label htmlFor='category' className='form-label'>Category</label>
            <select {...register('category')} id='category' className='form-select'>
            <option value="" className='text-center'>-- Select Category --</option>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}
            </select>
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <div className='d-flex justify-content-end'><button className='btn btn-primary'>Submit</button></div>
    </form>
  )
}

export default ExpenseForm