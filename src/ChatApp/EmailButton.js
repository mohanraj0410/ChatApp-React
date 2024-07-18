import { Button } from 'antd';
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';

const EmailButton = () => {

    const signInGoogle = async () => {

        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        
    };
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInGoogle}>Sign In With Google</Button>
        </div>
    );
};

export default EmailButton;
