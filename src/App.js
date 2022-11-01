// import logo from "./logo.svg";
import React,{Fragment,useContext} from "react";
import {Switch,Route} from "react-router-dom"
import "./App.css";
import Authentication from "./components/Login/Authentication";
import AuthContext from "./Store/auth-context";
import HeaderPage from "./components/Layout/HeaderPage";
import ProfileForm from "./components/Layout/ProfileForm";
import VerifyEmail from "./components/Layout/VerifyEmail";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import ExpenseItem from "./components/Pages/ExpenseItem";

function App() {
  const authCntx = useContext(AuthContext);
  return (


    <Fragment>
      {/* <Authentication /> */}
    
      <Switch>
            {!authCntx.isLogin && (
              // <Route path="/authentication">
                <Authentication />
               /* </Route> */
            )}
        <main>
            
            <Route path>
              {authCntx.isLogin && <HeaderPage/>}
              {!authCntx.isLogin && <ProfileForm/>}
              {!authCntx.isLogin && <VerifyEmail/>}
            </Route>
            <Route path='/Home' exact component={Home}>
              <Home/>
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