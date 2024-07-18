import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatAreaHeader = () => {
    return (
        <div className='ChatAreaHeader-container'>
            <div>
                <h2>User Name</h2>
            </div>
            <div className='ChatAreaHeader-icons'>
                <VideoCallIcon />
                <PersonAddAltIcon />
                <MoreVertIcon />
            </div>
        </div>
    )
}

export default ChatAreaHeader