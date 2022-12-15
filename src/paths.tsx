import React from 'react';

import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Form from './pages/Form'
import Search from './pages/Search';
import Home from './pages/Home'
import News from './pages/News';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"


const Paths = () =>{

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/search/:wordSearch" element={<Search/>} />
                <Route path="/news/:idPost" element={<News/>} />
                <Route path="*" element={<NotFound/>} />

            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Paths