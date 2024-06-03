import {BrowserRouter,Routes, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Signin from './Components/Signin/Signin';
import Signup from './Pages/Signup';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/Context';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import SellPage from './Pages/SellPage';

import Post from './store/PostContext';


function App() {


  const {setUser} = useContext(AuthContext) 
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        setUser(user)
        console.log(user, 'user app.js')
      }
    })
  })

  return (
    <div className="">
      <Post>
        <Routes>
          <Route  path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/sell' element={<SellPage />}></Route>
        </Routes>
      </Post>
    </div>
  );
}

export default App;
