import React from 'react';
import {useStateValue} from '../StateProvider';
import './Checkout.css'

function Checkout(){
    const[{basket}]=useStateValue();
    return (
        <div className="checkout">
            <img className="checkout_ad" alt="" src="data:image/jpeg;base64,/9j/"/>
            {basket.length===0?(
                <div> 
                    <h2>Your shopping basket is empty</h2>
                </div>

            ):(
                <div>
                    <h2>Your shopping basket</h2>
                </div>
            )}

        </div>
    )
}
export default Checkout;