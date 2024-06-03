import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';

import './Signup.css';

import firebase from "../../firebase/config";
import { FirebaseContext } from "../../store/Context";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, getDoc,setDoc,doc, collection, addDoc, getDocs } from "firebase/firestore";



function Signup(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const {firebase} = useContext(FirebaseContext)

    console.log(firebase)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const db = getFirestore(firebase);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            updateProfile(result.user.auth.currentUser, { displayName: email });
            console.log(result,'ff')
          })
          .then(()=>{
            addDoc(collection(db, 'users'), {
                id: auth.currentUser.uid,
                username:email,
                mobile:mobile
                })
        }).then(()=>{
            navigate("/login");
        })
        console.log('email', email)
    }


    console.log(email)

    return(
        <div className="signup">
            <div className="left">
                {/* <img src="https://www.dignited.com/wp-content/uploads/2018/01/olx_logo.jpg" alt="" /> */}
            </div>
            <div className="right">
            <div className="signup-main">
                    <div className="logo">
                        <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
                    </div>
                    <div className="title">Signup</div>
                    <form action="" className="signupform" onSubmit={handleSubmit}>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email address"/>
                        <input type="tel" onChange={(e)=>{setMobile(e.target.value)}} placeholder="Type your mobile number"/>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Type your password"/>
                        <input type="password" placeholder="Re-enter password"/>
                        <button type="submit">Sign Up</button>
                    </form>
            </div>
            </div>
        </div>
    )
}

export {Signup}