import React, { useState } from 'react';


export const WelcomePage = ({ history }) => {

    const hardcodedUser = {
        username: 'Jorge',
        password: 'Miramontes'

    }

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const usernameHandler =(event)=>{
        
        setUserData((prev)=>{
            return {
                ...prev,
                username: event.target.value
            }
        });
    }
    const passwordHandler =(event)=>{
        setUserData((prev)=>{
            return {
                ...prev,
                password: event.target.value
            }
        });
    }
    const doStart = (event) => {
        event.preventDefault();
        if(hardcodedUser.username === userData.username && hardcodedUser.password === userData.password){
            history.replace('/videojuegos');
        }
        else{
            alert("Wrong Credentials");
        }
        
    }
    return (
        <form style={{textAlign: 'center'}} onSubmit={doStart}>
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text" name="username" onChange = {usernameHandler} value = {userData.username}></input>
            </div>

        <div>
            <label>Password</label>
            <input className="form-control" type="password" name="password" onChange = {passwordHandler} value={userData.password}></input>
        </div>


            <button type="submit" className="btn btn-primary" style={{marginTop: '1.5rem'}}>Ingresar</button>
        </form>
    );
}