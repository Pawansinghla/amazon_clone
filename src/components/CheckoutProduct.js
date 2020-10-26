import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from '../StateProvider';
function CheckoutProduct({ id, title, image, price, rating }) {
    const[{basket},dispatch] =useStateValue();
    const removeFromBasket=()=>{
        //remove items from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });


    }
    return (
        <div className="checkourProduct">
            <img  className="checkoutProduct_image" src={image} alt="image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map(() => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button on onClick={removeFromBasket} > Remove from basket</button>
            </div>


        </div>
    
    )
}

export default CheckoutProduct;