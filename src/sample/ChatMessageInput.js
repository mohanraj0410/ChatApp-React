import { CameraOutlined, PaperClipOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search'
import React from 'react'

const ChatMessageInput = () => {
    const suffix = (
        <span style={{backgroundColor:"white"}}>
            <CameraOutlined style={{ marginRight: 8,backgroundColor:'white' }} />
            <PaperClipOutlined />
        </span>
    );
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className='ChatMessageInput-container'>
            <Search
                placeholder="Type Something..."
                enterButton="Send"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
            />
        </div>
    )
}

export default ChatMessageInput