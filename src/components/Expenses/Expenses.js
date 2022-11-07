import axios  from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { ThemeAction } from '../../Store/theme-reducer';
import { expensAction } from '../../Store/expense-reducer';
import  {Fragment,useState ,useRef,useEffect} from 'react'
import {
  Input,
  Select,

} from '@rebass/forms'
import {Box,Flex,Button} from 'rebass'
import classes from './Expenses.module.css'
import { saveAs } from "file-saver";

const Expenses = () => {
    const expenseRef = useRef(null);
    const descriptionRef = useRef('');
    const categoryRef = useRef('');

    const [totalExpense, setTotalExpense] = useState(0);
    const dispatch = useDispatch();

    const expensesDispatched = useSelector((state) => state.expenses);
    console.log(expensesDispatched.expenses);

    const getExpenseData = () => {
        axios.get(
            'https://expensetracker-cc1ac-default-rtdb.firebaseio.com/Expenses.json'
            ).then((res) => {
                const data = res.data;
                let sumOfExpenses = 0;
                Object.values(data).forEach((item) => {
                    sumOfExpenses += Number(item.amount)
                })
                setTotalExpense(sumOfExpenses);
                dispatch(expensAction.onAddOrGetExpense(data))
            }).catch((err) => {
                console.log(err);
            })
    };

    useEffect(getExpenseData, [dispatch]);

    const addExpenseHandler = async(event) => {
        event.preventDefault();

        const enteredExpense = expenseRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredCategory = categoryRef.current.value;

        const expenseObj = {
            amount: enteredExpense,
            description: enteredDescription,
            category: enteredCategory
        };

        try {
            const res = await axios.post('https://expensetracker-cc1ac-default-rtdb.firebaseio.com/Expenses.json',
            expenseObj );
            console.log(res);
            getExpenseData();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteExpenseHandler = (expenseId) => {
        axios.delete(
            `https://expensetracker-cc1ac-default-rtdb.firebaseio.com/Expenses/${expenseId}.json`
        ).then((res) => {
            console.log(res);
            getExpenseData();
        }).catch((err) => {
            console.log(err);
        })
    };

    const editExpenseHandler = (expenseId) => {
        expenseRef.current.value = expensesDispatched.expenses[expenseId].amount;
        descriptionRef.current.value = expensesDispatched.expenses[expenseId].description;
        categoryRef.current.value = expensesDispatched.expenses[expenseId].category;
        deleteExpenseHandler(expenseId);
    };

    const downloadHandler = () => {
        const file = Object.entries(expensesDispatched.expenses).map((expense) => {
            console.log(expense);
            console.log(expense[1]);
            return [expense[1].amount, expense[1].description,expense[1].category ];
        })
        console.log('csvfile', file);
        const makeCSV = (rows) => {
            return rows.map((row) => row.join(',')).join('\n')
        }
        console.log([makeCSV(file)]);
        const blob = new Blob([makeCSV(file)]);
        const url = URL.createObjectURL(blob);
        console.log(url);
        saveAs(url, 'expenses.csv');
    };


  return (
    <Fragment>
     <form onSubmit={addExpenseHandler} className={classes.expense}>
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
                    placeholder='Description'
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
        <div >
        {totalExpense > 10000 && (<button onClick={() => 
                        dispatch(ThemeAction.onThemeChange())}>
                        Active Premium
                    </button>)}
        </div>
        <div >
            <button onClick={downloadHandler} className={classes.butn}>
                Download file
            </button>
        </div>
     <div className={classes.list}>
                {Object.keys(expensesDispatched.expenses).map((expense) => {
                    return (
                        
                        <ul>
                            <li>
                                <span> ₹ {expensesDispatched.expenses[expense].amount} </span>
                                <span> for ( {expensesDispatched.expenses[expense].description}) </span>
                                <span>  {expensesDispatched.expenses[expense].category }</span>
                                <button className={classes.button} onClick={() => editExpenseHandler(expense)}>Edit</button> 
                                <button className={classes.button} onClick={() => deleteExpenseHandler(expense)}>Delete</button>
                                
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