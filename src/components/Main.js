import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from '../pages/signUp/SignUpPage'
import SignInPage from '../pages/signIn/SignInPage'
import Home from '../pages/home/Home'

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignUpPage />}></Route>
                <Route path='/signin' element={<SignInPage />}></Route>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main