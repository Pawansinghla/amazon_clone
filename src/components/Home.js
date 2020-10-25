import React from 'react';
import "./Home.css";
import Product from './Prodcut';

function Home() {
    return (
        <div className="home" >
            <img className="home_image"
                src="../../banner1.jpg"
                alt="" />


            <div className="home_row">

                <Product id={12345}
                    title="Alexa"
                    price={11}
                    image="https://media1.popsugar-assets.com/files/thumbor/0adBy5miKUID_YRNxuskjELQBSg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/27/036/n/1922507/3cc37eb94d58e39f_netimgjSDAnJ/i/Aukey-Dash-Cam.jpg"
                    rating={5} />




                <Product id={12345}
                    title="Alexa"
                    price={11}
                    image="https://media1.popsugar-assets.com/files/thumbor/0adBy5miKUID_YRNxuskjELQBSg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/27/036/n/1922507/3cc37eb94d58e39f_netimgjSDAnJ/i/Aukey-Dash-Cam.jpg"
                    rating={5} />

            </div>


            <div className="home_row">


                <Product id={12345}
                    title="Alexa"
                    price={11}
                    image="https://media1.popsugar-assets.com/files/thumbor/0adBy5miKUID_YRNxuskjELQBSg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/27/036/n/1922507/3cc37eb94d58e39f_netimgjSDAnJ/i/Aukey-Dash-Cam.jpg"
                    rating={5} />

                <Product id={12345}
                    title="Alexa"
                    price={11}
                    image="https://media1.popsugar-assets.com/files/thumbor/0adBy5miKUID_YRNxuskjELQBSg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/27/036/n/1922507/3cc37eb94d58e39f_netimgjSDAnJ/i/Aukey-Dash-Cam.jpg"
                    rating={5} />

                < Product id={12345}
                    title="Alexa"
                    price={11}
                    image="https://media1.popsugar-assets.com/files/thumbor/0adBy5miKUID_YRNxuskjELQBSg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/27/036/n/1922507/3cc37eb94d58e39f_netimgjSDAnJ/i/Aukey-Dash-Cam.jpg"
                    rating={5} />



            </div>


        </div>

    )
}
export default Home;