
import React from 'react'
import FormComponent from './FormComponent'

const Authentication = () => {
    const SignUpHandler = async(email, password) => {
        try {
            const res = await fetch(
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
            if(!res.ok){
                throw new Error('Something went wrong');
            }
            const data = await res.json();
            console.log(data);
            console.log('successful');
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }
  return (
    <div>
      <FormComponent onSignUp={SignUpHandler}/>
    </div>
  )
}

export default Authentication
