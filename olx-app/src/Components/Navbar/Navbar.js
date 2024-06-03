import React, { useContext } from 'react';
import './Navbar.css'
import { AuthContext, FirebaseContext } from '../../store/Context';
import {getAuth, signOut} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


function Navbar(){
    const {user} = useContext(AuthContext)
    const navigate =useNavigate()

    const {firebase} = useContext(FirebaseContext)

    console.log(user, 'home');
    
    const signout = ()=>{
        const auth = getAuth();
        signOut(auth).then(()=>{
            navigate('/login')
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    }

    return(
        <div className='navbar'>
            <div className="logo">
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
            </div>
            <div className="drop-down">
                <select>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                    <option value="">option 3</option>
                </select>
            </div>
            <div className="searchbar">
                <input type="search" placeholder='Find Cars, Mobile Phones and More...'/>
                <div className="search_logo"></div>
            </div>
            <div className="lng">
                <select>
                    <option value="">option 1</option>
                    <option value="">option 2</option>
                    <option value="">option 3</option>
                </select>
            </div>
            <div className="login">
            <Link to='/login' className='link'>{user? user.displayName :'Login'}</Link>
            </div>
            <div className='link'>{user && <a href="" className='link' onClick={signout}>Logout</a>}</div>
            { user && <div><Link to='/sell' className='link'>Sell</Link></div>}
        </div>
    )
}

export default Navbar