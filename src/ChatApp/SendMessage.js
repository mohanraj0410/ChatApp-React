import React, { useState } from 'react'
import { auth, db } from './firebase'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { Button, Input } from '@mui/material'

const SendMessage = ({ scroll }) => {
    const [text, setText] = useState("")

    const handleSendMessage = async (e) => {

        e.preventDefault()

        if (text) {
            const { uid, photoURL } = auth.currentUser

            const messageRef = collection(db, "message");

            await setDoc(doc(messageRef), {
                text: text,
                uid,
                photoURL,
                createdAt: serverTimestamp()
            });
            setText("")

            scroll.current.scrollIntoView({ behavior: 'smooth' })
        }

    }

    return (
        <div>
            <form onSubmit={handleSendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Type Something...' type="text" value={text} onChange={e => setText(e.target.value)} />
                    <Button style={{ backgroundColor: "blue",color:"white", width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
