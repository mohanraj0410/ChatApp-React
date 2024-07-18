import React from 'react'
import { auth } from './firebase'
import { Button } from 'antd'

const SignOut = () => {

    const handleSignOut=()=>{
        auth.signOut()
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: "center", position: 'fixed', width: '100%', height: "10vh", backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <h2 style={{ fontFamily: "sans-serif" }}>CHATS</h2>
            <Button style={{ padding: '20px', marginRight: "20px", fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={handleSignOut}>Sign Out</Button>
        </div>
    )
}

export default SignOut