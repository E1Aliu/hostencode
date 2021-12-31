import React from "react";
import { Link } from "react-router-dom";
import './styles/watermarking.scss';
import { FormattedMessage } from "react-intl";
const Watermarking=()=>{
    return(
             <div className="Premium">
                <div className="marking">
                <div className='photo'></div>
                <div className="Description">
                <h4>We ARE PREMIUM FIRST</h4>
                <h1>Customizable Watermarking</h1>
                <p>Highlight your brand adding your logo,and customize it however you like</p>
                <div className="links">
                    <button>Get Started</button>
                    <button>Learn More</button>

                </div>

            </div>

            </div>
            <div className="Audio">
                <div className="Description">
                    <h4>We ARE PREMIUM FIRST</h4>
                    <h1>Customizable Watermarking</h1>
                    <p>Highlight your brand adding your logo,and customize it however you like</p>
                    <div className="links">
                        <button>Get Started</button>
                        <button>Learn More</button>

                    </div>
                </div>
                <div className='photoo'></div>
            </div>
         </div>
    )
}
export default Watermarking;
