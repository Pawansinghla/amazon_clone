import React from 'react';
import "./Home.css";
import Product from './Prodcut';

function Home(){
    return (
        <div className="home">
            <img className="home_image" src="../../banner1.jpg" alt=""/>

            <Product id={12345} title="HEllo" price={11} image="" rating={5}/>

            </div>

    )
}
export default Home;