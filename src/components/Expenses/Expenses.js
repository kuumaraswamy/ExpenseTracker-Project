import  {Fragment,useState ,useRef} from 'react'
import {
  Input,
  Select,

} from '@rebass/forms'
import {Box,Flex,Button} from 'rebass'
import classes from './Expenses.module.css'

const Expenses = () => {
    
        const expenseRef =useRef('null')
        const descriptionRef = useRef('');
        const categoryRef = useRef('');
        const [expenses, setExpenses] = useState([]);

    

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredExpense = expenseRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredCategory = categoryRef.current.value;
    
        const expenseObj = {
            amount: enteredExpense,
            description: enteredDescription,
            category: enteredCategory
        };
        setExpenses( [...expenses, expenseObj] );
    };

  return (
    <Fragment>
     <form onSubmit={submitHandler} className={classes.expense}>
        <Box
            py={3}>
            <Flex mx={4} mb={3}>
                <Box width={1/3} px={2}>
                {/* <Label htmlFor='name'>Name</Label> */}
                <Input className={classes.Input}
                    id='name'
                    name='name'
                    placeholder='Expense Amount'
                    defaultValue="100"
                    ref={expenseRef}
                    required
                />
                </Box>
                <Box width={1/3} px={2}>
                {/* <Label htmlFor='name'>Name</Label> */}
                <Input
                    id='name'
                    name='name'
                    defaultValue='Description'
                    ref={descriptionRef}
                    required
                />
                </Box>
                <Box width={1/3} px={2}>
                {/* <Label htmlFor='location'>Location</Label> */}
                <Select
                    id='category'
                    name='category'
                    ref={categoryRef}
                    required
                    defaultValue='Books'>
                    <option>Books</option>
                    <option>Movies</option>
                    <option>Shopping</option>
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Others</option>
                </Select>
                </Box>
                <Button className={classes.button}> Submit</Button>      
            </Flex>  
        </Box>
     </form>
     <div className={classes.list}>
                {expenses.map((expense) => {
                    return (
                        
                        <ul>
                            <li>
                                <span>Rupees {expense.amount} </span>
                                <span> for ( {expense.description} ) </span>
                                <span>  {expense.category}</span>
                                <button className={classes.button}>Edit</button> 
                                <button className={classes.button}>Delete</button>
                                
                            </li>
                        </ul>
                    )
                })}            
    </div>
    </Fragment>
  )
}

export default Expenses












// import { Fragment, useRef, useState } from 'react';
// // import Button from '../UI/Button';
// import classes from './Expenses.module.css';

// const Expenses = (props) => {
//     const expenseRef = useRef(null);
//     const descriptionRef = useRef('');
//     const categoryRef = useRef('');
//     const [expenses, setExpenses] = useState([]);

// const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredExpense = expenseRef.current.value;
//     const enteredDescription = descriptionRef.current.value;
//     const enteredCategory = categoryRef.current.value;

//     const expenseObj = {
//         amount: enteredExpense,
//         description: enteredDescription,
//         category: enteredCategory
//     };
//     setExpenses( [...expenses, expenseObj] );
// };

//     return (
//         <Fragment>
//             <form className={classes.expense}onSubmit={submitHandler}>
//                 <h1>Add New Expense</h1>
//                 <input
//                     name='expense'
//                     type='number'
//                     placeholder='Enter your Expense'
//                     ref={expenseRef}
//                     required
//                 />
//                 <input
//                     name='description'
//                     type='description'
//                     placeholder='Description'
//                     ref={descriptionRef}
//                     required
//                 />
//                 <select
//                     placeholder='Category'
//                     ref={categoryRef}
//                     required >
//                     <option>Food</option>
//                     <option>Petrol</option>
//                     <option>Movie</option>
//                     <option>Vacation</option>
//                     <option>Shopping</option>
//                     <option>Others</option>
//                     </select>
//                 <button>Add Expense</button>
//             </form>
//             <div className={classes.list}>
//                 {expenses.map((expense) => {
//                     return (
//                         <ul>
//                             <li>
//                                 <h1>Rupees {expense.amount}  </h1>
//                                 <span> for ( {expense.description} ) </span>
//                                 <span>  {expense.category}</span>
//                                 <hr />
//                             </li>
//                         </ul>
//                     )
//                 })}            
//             </div>
//         </Fragment>
//     )

// };

// export default Expenses;