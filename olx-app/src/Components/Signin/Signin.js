import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, } from "firebase/auth";


import './Signin.css';
import { useNavigate } from "react-router-dom";

function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((results)=>{
            const user = results.user;
            console.log(user,'user')
        })
        .catch((error)=>{
            console.log(error.message,'error')
        })

        onAuthStateChanged(auth,(user)=>{
            if (user){
                navigate('/')
            } else{
                console.log('invalid usernameqq')
            }
        })
    }


    return(
        <div className="signin">
            <div className="signin-main">
                    <div className="logo">
                        <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
                    </div>
                    <div className="title">Enter your email to login</div>
                    <form action="" className="loginform" onSubmit={(e)=>handleSubmit(e)}>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email address"/>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Type your password"/>
                        <button type="submit">Log In</button>
                    </form>
            </div>
        </div>
    )
}

export default Signin