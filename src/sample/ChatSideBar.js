import React from 'react'
import ChatNavbar from './ChatNavbar'
import ChatUserList from './ChatUserList';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ChatSideBar = () => {

    return (
        <div className='chatSideBar-container'>
            <ChatNavbar />
            <div className='sideBar-search'>
                <div>
                    <Input size="medium" placeholder="Search" prefix={<SearchOutlined />} />
                </div>
                <ChatUserList />
            </div>

        </div>
    )
}

export default ChatSideBar