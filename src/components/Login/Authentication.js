
import React,{Fragment, useContext} from 'react'

import FormComponent from './FormComponent'
import AuthContext from '../../Store/auth-context'

const Authentication = () => {
   
    const authCntx = useContext(AuthContext);
    const SignUpHandler = (email, password) => {
         fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtKiPgxUqIRvYCh_r31wlNnUDTunA-T2M',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    }),
                    headers:{
                        "Content-Type": "application/json",
                    }
                }
            )
            .then((res) => {
                if(res.ok){
                  return res.json()
                }else{
                  return res.json().then((data) => {
                    const errormsg = data.error.message;
                    throw new Error(errormsg)
                  })
                }
              })
              .then((data) => {
                console.log('successfully created account');
                console.log(data);
              })
              .catch((err) => {
                alert(err.message);
              })
        }
    
//Login handler code for firebase authentication
    const LoginHandler = (email, password) => {
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtKiPgxUqIRvYCh_r31wlNnUDTunA-T2M',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            }
        )
        .then((res) => {
            if(res.ok){
            return res.json()
            }else{
            return res.json().then((data) => {
                const errormsg = data.error.message;
                throw new Error(errormsg)
            })
            }
        })
        .then((data) => {
            authCntx.login(data.idToken)
            console.log(data);
            console.log('successfully loggedIn');
            
        })
        .catch((err) => {
            alert(err.message);
        })     
    };

//Login handler code for firebase authentication

  return (
    <Fragment>
       <FormComponent onSignUp={SignUpHandler} onLogin={LoginHandler}/>
 
    </Fragment>
  )
}

export default Authentication
