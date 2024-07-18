import { deepPurple } from '@mui/material/colors'
import { Avatar } from 'antd'
import React from 'react'

const MessageList = () => {
    return (
        <div className='message-container'>
            <div className='message-info'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                <span>Just Now</span>
            </div>
            <div className='message-content'>
                <p>hello</p>
                <p>how r u</p>
            </div>
        </div>
    )
}

export default MessageList