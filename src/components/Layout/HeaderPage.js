import React from 'react'

import { Flex,Text,Box,Link,button} from 'rebass'
import classes from "./HeaderPage.module.css"


const HeaderPage = () => {
  
  return (
    <div className>
      <Flex
          px={100}
          color='white'
          bg='#F3F3F3'
          alignItems='center'>
        <Text p={4} fontWeight='bold' color="black"><h1>Welcome To Expense Tracker !!</h1></Text>
        <Box mx='auto' />
        <Link variant='nav' href='./ProfileForm'>
          <button className={classes.button} >Your Profile Is Incomplete <a href="./profileForm">Complete now</a>  </button>
        </Link>
      </Flex>

      {/* <ProfileForm></ProfileForm> */}
     
    </div>
  )
}


export default HeaderPage;
