import React, { Component } from 'react';
import Navbar from './component/navbar';
import Users from "./component/ueser";
import Home from "./component/Home";
import Login from "./component/login";
import Register from "./component/register";
import {Route,Routes,Switch} from "react-router-dom";
import User from './component/user';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='/users/:id' element={<User/>}/>
                    <Route path="/" element={<Home />}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </div>
            </>
        );
    }
}
 
export default App;