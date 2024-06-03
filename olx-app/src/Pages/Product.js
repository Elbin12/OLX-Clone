import React from "react";
import Product from "../Components/Product/Product";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

function Products(){
    return(
        <div>
            <Navbar />
            <Header />
            <Banner />
            <Product />
            <Footer />
        </div>
    )
}

export default Products