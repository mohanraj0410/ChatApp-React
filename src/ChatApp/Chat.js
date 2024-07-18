import React, { useEffect, useRef, useState } from 'react';
import SignOut from './SignOut';
import { auth, db } from './firebase';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import SendMessage from './SendMessage';
import { FloatButton, Popover } from 'antd';
import { DeleteFilled, DownOutlined } from '@ant-design/icons';

const Chat = () => {
    const scroll = useRef();
    const [messages, setMessages] = useState([]);


    useEffect(() => {

        scroll.current.scrollIntoView({ behavior: 'smooth' })

        const q = query(collection(db, 'message'), orderBy('createdAt', 'asc'));

        const unsubscribe = onSnapshot(q, snapshot => {
            setMessages(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
            scroll.current?.scrollIntoView({ behavior: 'smooth' });
        });

        return () => unsubscribe();
        
    }, []);


    const deleteText = async (id) => {

        await deleteDoc(doc(db, "message", id));
    }

    return (
        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div key={id}>
                        <Popover content={<DeleteFilled style={{ cursor: "pointer" }} onClick={() => deleteText(id)} />}>
                            <div className={`msg ${uid === auth.currentUser?.uid ? 'sent' : 'received'}`}>
                                <img src={photoURL} alt="User Avatar" />
                                <p>{text}</p>
                            </div>
                        </Popover>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <FloatButton icon={<DownOutlined />} style={{
                bottom: 80,
            }} onClick={() => scroll.current.scrollIntoView({ behavior: 'smooth' })} />
            <div ref={scroll}></div>
        </div>
    );
};

export default Chat;

