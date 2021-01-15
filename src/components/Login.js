import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

import {auth, provider} from '../firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://preview.redd.it/s0jqt1kdhou51.jpg?width=960&crop=smart&auto=webp&s=a9e9ed181cc4f5876ea67373abf942eb75d9f1c0"
                    alt=""
                />
            </div>

            <Button 
                startIcon={ 
                    <img
                        style={{
                            height: "30px",
                            paddingRight: "20px"
                        }} 
                        src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" 
                        alt=""
                    />
                }
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login
