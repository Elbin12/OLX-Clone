import React, { useContext, useEffect, useState } from "react";
import './Poster.css'

import { FirebaseContext } from "../../store/Context";

import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs, query } from "firebase/firestore"; 
import { PostContext } from "../../store/PostContext";
import { useNavigate } from "react-router-dom";


function Poster(){

    const {firebase} = useContext(FirebaseContext)
    const [newproducts, setProducts] = useState([])

    const {setPostDetails} = useContext(PostContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const db = getFirestore(firebase);

        async function fetch(){

            const queryp=query(collection(db,"products"))
            const products=await getDocs(queryp)
            const newProducts=products.docs.map(doc=>{
            return {
                ...doc.data(),id:doc.id}})
                setProducts(newProducts)
            console.log('kkk',newproducts, newProducts);
        }
        fetch()
        newproducts.map((product)=>{
            console.log(product.price,'klfknkgf')
        })
    },[])

    console.log(newproducts,'ll')
    return(
        <div className="posters-main">
            <div className="posters-section">
            <div className="title">Fresh recommendations</div>
            <div className="posters">
                {newproducts.map(product=>(
                <div className="poster" onClick={()=>{
                    setPostDetails(product)
                    navigate('/product')
                }}>
                    <div className="image"><img src={product.img} alt="" /></div>
                    <div className="content">
                        <h6 className="price">₹ {product.price}</h6>
                        <p>{product.name}</p>
                        <div style={{display:'flex', gap:'7px'}}>
                        <p className="desc" style={{margin:'0'}}>We are manufacturer of card table, cas</p>
                        <p style={{float:'right', fontSize:'10px',alignContent:'end'}}>{product.createdAt}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Poster