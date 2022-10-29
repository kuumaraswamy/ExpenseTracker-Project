// import logo from "./logo.svg";
import React,{Fragment,useContext} from "react";
import {Switch} from "react-router-dom"
import "./App.css";
import Authentication from "./components/Login/Authentication";
import AuthContext from "./Store/auth-context";
import DummyPage from "./components/DummyPage";

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
              // <Route path="/dummyPage">
                <DummyPage />
              // </Route>
            )}
      </Switch>
  
    </Fragment>
  
  );
}

export default App;
