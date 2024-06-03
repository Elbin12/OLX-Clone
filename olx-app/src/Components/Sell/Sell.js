import React, { useContext, useState } from "react";
import './Sell.css';
import { FirebaseContext, AuthContext } from "../../store/Context";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {getAuth} from 'firebase/auth';
import { getFirestore, getDoc,setDoc,doc, collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



function Sell(){

    
    const [name, setName] = useState('');
    const [category, setCategory] =useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const {firebase} = useContext(FirebaseContext)
    const {user} = useContext(AuthContext)

    const date = new Date()

    console.log(user, 'user');


    const db = getFirestore(firebase);
    const auth = getAuth();

    const handleSubmit = ()=>{
        const storage = getStorage();
        const ImagesRef = ref(storage, `images/${image.name}`);
        const metadata = {
            contentType: 'image/jpeg',
          };

        uploadBytes(ImagesRef, image, metadata).then((snapshot)=>getDownloadURL(snapshot.ref).then((url)=>{
            addDoc(collection(db, 'products'), {
                id: auth.currentUser.uid,
                name,
                category,
                price,
                img:url,
                userId:user.uid,
                createdAt:date.toDateString()
                })
                navigate('/', {replace:true})
        }))   

    }

    return(
        <div className="sellpage">
            <div action="" className="sellform">
                <label htmlFor="fname">Name</label>
                <br />
                <input type="text" name="Name" onChange={(e)=>{setName(e.target.value)}} />
                <br />
                <label htmlFor="fCategory">Category</label>
                <br />
                <input type="text" name="Category" onChange={(e)=>{setCategory(e.target.value)}} />
                <br />
                <label htmlFor="fPrice">Price</label>
                <br />
                <input type="number" min={0} name="Price" onChange={(e)=>{setPrice(e.target.value)}} />
                <br />
                <img src={image? URL.createObjectURL(image) :''} alt="No image uploaded" height={image? '100px': ''} width={image? '100px': 'auto'} style={{fontSize:'small'}}/>
                <br />
                <input type="file" name="img" onChange={(e)=>{setImage(e.target.files[0])}}/>
                <br />
                <button onClick={handleSubmit}>Upload and Submit</button>
            </div>
        </div>
    )
}

export default Sell