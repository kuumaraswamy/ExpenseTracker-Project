import React from 'react'
import axios from 'axios';
import classes from './ProfileForm.module.css';
import { BsGithub, BsGlobe } from 'react-icons/bs';
import { useContext, useRef } from 'react';
import AuthContext from '../../Store/auth-context';


const ProfileForm = (props) => {
    const nameInputRef = useRef('');
    const urlInputRef = useRef('');
    const authCntx = useContext(AuthContext);
    
    const submitHandler = async(event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUrl = urlInputRef.current.value;

        const updatedInfo = {
            idToken: authCntx.token,
            displayName: enteredName,
            phtoUrl: enteredUrl,
            deleteAttribute: null,
            // returnSecureToken: true	
        }
        
        try {
            const res = await axios.post (
                'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAtKiPgxUqIRvYCh_r31wlNnUDTunA-T2M'
            , updatedInfo 
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <section className={classes['user-profile']}>
                <h1>Contact Details</h1>
            <form onSubmit={submitHandler}>
                    <BsGithub size={25} />
                    <label htmlFor='name'>Full Name</label>
                    <input 
                        id='name'
                        type='text'
                        name='name'
                        required
                        ref={nameInputRef}
                    />
                    <BsGlobe size={25} />
                    <label htmlFor='name'>Profile Photo URL</label>
                    <input 
                        id='url'
                        type='url'
                        name='url'
                        required
                        ref={urlInputRef}
                    />
                
                <button>Update</button>
            </form>
        </section>
    
    )
};

export default ProfileForm;