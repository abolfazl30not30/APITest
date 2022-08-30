
import React, { Component } from 'react';
import axios from 'axios';
import LoadingUsers from './loading/loadingUsers';
import Skeleton from 'react-loading-skeleton';

class Users extends Component {

    state = { 
        users : [],
        isLoading : true
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:8086/api/').then((response) => response.json())
        .then((data) => console.log(data));
        //this.setState({users : response.data.data, isLoading : false})
        console.log(response)
    }
    render() { 
        return (
            <>
            <button onClick={this.handleCreate} className='btn btn-lg btn-primary'>Create</button>
            <div className='row'>
                {
                    this.state.isLoading ? (
                        <LoadingUsers/>
                    ) : (
                        this.state.users.map((user)=>{
                        return(
                            <div className='col-4 text-center p-5'>
                                <img src={user.avatar} style={{borderRadius:"50%" , width:"100px"}} alt=""/>
                                <h4>{user.first_name} {user.last_name}</h4>
                                <h5>{user.email}</h5>
                                <div className='row'>
                                    <div className='col-6'>
                                        <button onClick={()=>{this.handleUpdate(user)}} className='btn btn-info btn-sm'>Update</button>
                                    </div>
                                    <div className='col-6'>
                                        <button onClick={()=>{this.handleDelete(user)}} className='btn btn-danger btn-sm'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    )
                }
            </div>
            </>
        );
    }

    handleCreate = async () =>{
        const newUser={
            first_name:"Abolfazl",
            last_name:"ramezanian",
            email:"abolfazl@gmail.com",
            avatar:"me.jpg"
        }
        const respond = await axios.post("https://reqres.in/api/user",newUser);
        console.log(respond);
        this.setState({users : [...this.state.users ,newUser]});

    }
    handleUpdate = async(user) =>{
        user.first_name = "update";
        const respond = await axios.put(`https://reqres.in/api/user/${user.id}`,user)
        console.log(respond);
        const updatedUsers = [...this.state.users];
        let index = updatedUsers.indexOf(user);
        updatedUsers[index] = {...user};
        this.setState({users : updatedUsers});
    }

    handleDelete = async(user) =>{
        const respond = await axios.delete(`https://reqres.in/api/user/${user.id}`)
        const updateUsers = this.state.users.filter(u => u.id !== user.id);
        this.setState({users:updateUsers});
    }
}
 
export default Users;