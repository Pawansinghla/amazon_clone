import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal(){
    return(
        <div className="subtotal">
            
            <CurrencyFormat>
                decimalScale={2}
                value={}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            </CurrencyFormat>
            <button>Proceed to checkout</button>

        </div>
    )
}