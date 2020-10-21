import React from 'react';
import './Product.css';

const Product=({id,title,price,image,rating})=>{

    return(
        <div className="product">
        <div className="product_info"> 

            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating).fill().map(()=>(
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
                <img src={image} alt=""/>
                <button>Add to basket </button>
            

        </div>
    )
}


export default Product;