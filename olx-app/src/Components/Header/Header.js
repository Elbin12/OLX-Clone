import React from "react";
import './Header.css'

function Header(){
    return(
        <div className="head">
            <div className="all-categories"><h5>ALL CATEGORIES</h5></div>
            <div className="categories">
                <a href="">Cars</a>
                <a href="">Motorcycles</a>
                <a href="">Mobile Phones</a>
                <a href="">For Sale: Houses & Apartments</a>
                <a href="">Scooters</a>
                <a href="">Commercial & Other Vehicles</a>
                <a href="">For Rent: Houses & Apartments</a>
            </div>
        </div>
    )
}

export default Header;