import React from 'react';
import {useStateValue} from '../StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout(){
    const[{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
            {basket.length===0?(
                <div> 
                    <h2>Your shopping basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items,
                        click "Add to Basket" next to the item.
                    </p>
                </div>

            ):(
                <div>
                    <h2 className="checkout_title">Your shopping basket</h2>
                    {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    ))}
                </div>
            )}

        </div>
        <div className="checkout_right">
        <Subtotal />
      </div>
        </div>
    )
}
export default Checkout;