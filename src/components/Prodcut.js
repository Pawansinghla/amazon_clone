import React from 'react';
import './Product.css';
import {useStateValue} from "../StateProvider";


const Product = ({ id, title, price, image, rating }) => {
const [{},dispatch]=useStateValue();

const addTobasket=()=>{
    //add it to the basket
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            price:price,
            image:image,
            rating:rating,
        }
    })


};
    return (
        <div className="product">
            <div className="product_info">

                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map(() => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addTobasket}>Add to basket </button>


        </div>
    )
}


export default Product;