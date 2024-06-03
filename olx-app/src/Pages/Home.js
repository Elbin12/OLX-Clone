import React from "react";
import Navbar from '../Components/Navbar/Navbar';
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";
import Poster from "../Components/Poster/Poster";
import Footer from "../Components/Footer/Footer";



function Home(){
    return(
        <div>
            <Navbar />
            <Header />
            <Banner />
            <Poster />
            <Footer />
        </div>
    )
}


export default Home