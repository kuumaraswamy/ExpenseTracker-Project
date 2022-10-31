// import logo from "./logo.svg";
import React,{Fragment,useContext} from "react";
import {Switch,Route} from "react-router-dom"
import "./App.css";
import Authentication from "./components/Login/Authentication";
import AuthContext from "./Store/auth-context";
import HeaderPage from "./components/Layout/HeaderPage";
import ProfileForm from "./components/Layout/ProfileForm";

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
            { authCntx.isLogin && (
              <Route exact path="/" component={HeaderPage}>
                {/* <HeaderPage /> */}
               </Route> 
            )}
            { authCntx.isLogin && (
               <Route path="/" >
                <ProfileForm />
              </Route>
            )}
      </Switch>
  
    </Fragment>
  
  );
}

export default App;
