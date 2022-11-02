import React from 'react'
import Expenses from '../Expenses/Expenses'
import classes from './ExpenseItem.module.css'

const ExpenseItem = () => {
  return (
    <div >
      <h1 className={classes.div}>Expense Items</h1>
       <Expenses/> 
    </div>
  )
}

export default ExpenseItem
