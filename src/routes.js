
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./screens/home";
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

export const RoutesDOM = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/notes" element={<NotesIndexScreen />} />
                <Route path="/user/edit" element={<UserEditScreen />} />
            </Routes>
       </BrowserRouter>
   )
}