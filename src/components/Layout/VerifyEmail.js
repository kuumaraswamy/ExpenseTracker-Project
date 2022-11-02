import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../../Store/auth-context';
import classes from './VerifyEmail.module.css';


const Profile = () => {
    const authCntx = useContext(AuthContext);

    const verifyEmailHandler = () => {
        const resp = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAtKiPgxUqIRvYCh_r31wlNnUDTunA-T2M',
        {idToken: authCntx.token, requestType:'VERIFY_EMAIL'}
            ).then((res) => {
                console.log(resp);
        }).catch((err) => {
            console.log(err);
            alert(err);
        })
      };

    return (
        <section className={classes.profile}>
            {/* <h1>Complete Your Profile</h1> */}
            
            <h2>Verify your email adress</h2>
            {console.log(authCntx.email)}
            <p>
                You've entered {''}
                <span style={{ fontWeight: 'bold', fontStyle:'italic' }}>
                    {authCntx.email}
                </span>{''}
                    as the email adress for your account.
                <br />
                <br />
                Please Verify it by clicking button below.
            </p>
            <button onClick={verifyEmailHandler}>Verify your email</button>
        </section>

    )
};

export default Profile;