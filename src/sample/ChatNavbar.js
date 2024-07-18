import { Avatar, Button } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const ChatNavbar = () => {
    return (
        <div className='chatNavBar-container'>
            <h2>CHATS</h2>
            <div>
                <div>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                    <h4>User Name</h4>
                </div>
                <div>
                    <Button
                        variant="text"
                        size="small"
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChatNavbar