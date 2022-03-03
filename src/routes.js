
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/home";
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

const Routes = () => {
   return(
       <BrowserRouter>
           <Route element = { Home }  path="/" exact />
           <Route element = { RegisterScreen } path="/register" exact/>
           <Route element = { LoginScreen } path="/login" exact/>
           <Route element = { NotesIndexScreen } path="/notes" exact/>
           <Route element = { UserEditScreen } path="/user/edit" exact/>
       </BrowserRouter>
   )
}

export default Routes;