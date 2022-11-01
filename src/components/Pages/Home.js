import React from 'react'
import classes from "./Home.module.css"
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
    <div className={classes.center}>
           <Helmet>
                <style>{'body { background-color: red; }'}</style>
            </Helmet>
      <h1>Expense Tracker !! </h1>
    </div>
  )
}

export default Home
