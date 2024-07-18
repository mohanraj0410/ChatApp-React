import { deepPurple } from '@mui/material/colors'
import { Avatar } from 'antd'
import React from 'react'

const ChatUserList = () => {
    return (
        <div className='user-container'>
            <div className='user-list'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                <div>
                    <span>User Name</span>
                </div>
            </div>
            <div className='user-list'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                <div>
                    <span>User Name</span>
                </div>
            </div>
            <div className='user-list'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                <div>
                    <span>User Name</span>
                </div>
            </div>
            <div className='user-list'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                <div>
                    <span>User Name</span>
                </div>
            </div>
            <div className='user-list'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>H</Avatar>
                <div>
                    <span>User Name</span>
                </div>
            </div>
        </div>

    )
}

export default ChatUserList