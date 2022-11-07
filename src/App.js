// import logo from "./logo.svg";
import React,{Fragment} from "react";
import {Switch,Route} from "react-router-dom"
import "./App.css";
import Authentication from "./components/Login/Authentication";
import { useSelector } from "react-redux";
// import AuthContext from "./Store/auth-context";
import HeaderPage from "./components/Layout/HeaderPage";
import ProfileForm from "./components/Layout/ProfileForm";
import VerifyEmail from "./components/Layout/VerifyEmail";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import ExpenseItem from "./components/Pages/ExpenseItem";


function App() {
  const isLogin = useSelector(state => state.authentication.isLogin);
  console.log(isLogin);
  // const authCntx = useContext(AuthContext);
  return (


    <Fragment>
      {/* <Authentication /> */}
    
      <Switch>
            {!isLogin && (
              // <Route path="/authentication">
              <Route path='/'>
                <Authentication />
               </Route> 
            )}
        <main>
            
            <Route path>
              {isLogin && <HeaderPage/>}
              {!isLogin && <ProfileForm/>}
              {!isLogin && <VerifyEmail/>}
            </Route>
            <Route path='/Home' exact component={Home}>
              {isLogin && <Home/>}
            </Route> 
            <Route path="/Profile" component={Profile}>
              
            </Route>
            <Route path="/ExpenseItem" component={ExpenseItem}>
            </Route>
             
             
        </main>
      </Switch>
  
    </Fragment>
  
  );
}

export default App;


/* <Route path='/profile'>
{isLogin && <ProfilePage />}
{!isLogin && <Redirect to='/auth' />}
</Route> */