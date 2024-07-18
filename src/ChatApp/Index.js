import React from 'react'
import EmailButton from './EmailButton'
import Chat from './Chat'
import { auth } from './firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import "./style.css"

const Index = () => {

  const [user] = useAuthState(auth)

  return (
    <div>
      {user ?
        <Chat /> :
        <EmailButton />
      }
    </div>
  )
}

export default Index

