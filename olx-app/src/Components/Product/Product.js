import React, { useContext, useEffect, useState } from "react";
import './Product.css'
import { PostContext } from "../../store/PostContext";
import { FirebaseContext } from "../../store/Context";

import { collection,query,where, getDocs, getFirestore } from "firebase/firestore";


function Product(){
   
    const [userDetails, setUserDetails] =useState();
    const {PostDetails} = useContext(PostContext);
    const {firebase} = useContext(FirebaseContext);
    const {userId} = PostDetails

    console.log('user before useEffect' , userId)

    useEffect(()=>{
    
        const db = getFirestore(firebase);
        const {userId} = PostDetails
        console.log('user inside useEffect' , userId)
        const q = query(collection(db, "users"), where("id","==",userId));

        async function fetch(){
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUserDetails(doc.data())
                console.log(doc.id, " => ", doc.data(), userId);
            });
        }
        fetch()
    },[PostDetails])

    console.log('ddd', PostDetails)
    return(
        <div className="product-section">
            <div className="left">
                <div className="produt-image">
                    <img src={PostDetails.img} alt="" />
                </div>
                <div className="desc">
                    <h4>Description</h4>
                    <p>We are manufacturer of card table, casino, poker table, roulette table, different size and customized table if required such set up then feel free to contact me.</p>
                </div>
            </div>
            <div className="right">
                <div className="product-details">
                    <div className="price">
                        <h1>₹ {PostDetails.price}</h1>
                        <p>We are manufacturer of card table, casino, poker table, roulette table</p>
                    </div>
                </div>
                {userDetails && <div className="contact-seller">
                    <div className="title">
                        <h5>{userDetails.username}</h5>
                    </div>
                    <div className="chat">
                        <h4>Chat with seller</h4>
                    </div>
                    <div className="contact">
                        <p>{userDetails.mobile}</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Product