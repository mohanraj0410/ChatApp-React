import React from 'react'
import ChatAreaHeader from './ChatAreaHeader'
import ChatMessage from './ChatMessage'
import ChatMessageInput from './ChatMessageInput'

const ChatArea = () => {
    return (
        <div className='chatArea-container'>
            <ChatAreaHeader />
            <ChatMessage />
            <ChatMessageInput/>
        </div>
    )
}

export default ChatArea