import {useContext} from 'react'
import { useHistory } from 'react-router';
import { Flex,Text,Box,button} from 'rebass'
import AuthContext from '../../Store/auth-context'
import classes from "./HeaderPage.module.css"





const HeaderPage = () => {
  
   const authCntx = useContext(AuthContext)
   const history = useHistory();
  const logoutHandler = () =>{
    authCntx.logout()
  }
  
  return (
    <div >
      <Flex
          px={100}
          color='white'
          bg='#FFFAF0'
          border-color='1px solid black'
          alignItems='center'>
        <Text p={4} fontWeight='bold' color="black" fontFamily= "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"><h1>Welcome To Expense Tracker !!</h1></Text>
        <Box mx='auto' />
        {/* <Link variant='nav' to={'./Home'}>
        
        </Link> */}
          <button  mr={50} className={classes.button} onClick={()=>history.push('./Home')} > Home </button>
           <button mr={50} className={classes.button}onClick={()=>history.push('./Profile')}> Profile </button>
          <button mr={50} className={classes.button} onClick={()=>history.push('./ExpenseItem')}> Expense </button>
            <button mr={50} className={classes.button} onClick={logoutHandler} > Logout </button>
         
      
      </Flex> 
    

      {/* <ProfileForm></ProfileForm> */}
     
    </div>
  )
}


export default HeaderPage;
