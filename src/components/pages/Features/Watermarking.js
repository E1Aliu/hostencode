// import React from "react";
// import { Link } from "react-router-dom";
// import './styles/watermarking.scss';
// import { FormattedMessage } from "react-intl";
// const Watermarking=()=>{
//     return(
//              <div className="Premium">
//                 <div className="marking">
//                 <div className='photo'></div>
//                 <div className="Description">
//                 <h4>We ARE PREMIUM FIRST</h4>
//                 <h1>Customizable Watermarking</h1>
//                 <p>Highlight your brand adding your logo,and customize it however you like</p>
//                 <div className="links">
//                     <button>Get Started</button>
//                     <button>Learn More</button>

//                 </div>

//             </div>

//             </div>
//             <div className="Audio">
//                 <div className="Description">
//                     <h4>We ARE PREMIUM FIRST</h4>
//                     <h1>Customizable Watermarking</h1>
//                     <p>Highlight your brand adding your logo,and customize it however you like</p>
//                     <div className="links">
//                         <button>Get Started</button>
//                         <button>Learn More</button>

//                     </div>
//                 </div>
//                 <div className='photoo'></div>
//             </div>
//          </div>
//     )
// }
// export default Watermarking;
import React from 'react'
import { data1 } from './data'
import './styles/watermarking.scss'
import { FaCloud } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const Watermarking = () => {
    return (
        <div className='high-quality-conversions'>
            {data1.map((props) => {
                return(
                    <div className={`row ${props.cls}`}>
                        <div className="images">
                            <div className="img" style={{content:`url(${props.img})`}}></div>
                            <div className="cloud cloud1">
                                <FaCloud />
                            </div>
                            <div className="cloud cloud2">
                                <FaCloud />
                            </div>
                        </div>
                        <div className="info">
                            <h5>{props.subtitle}</h5>
                            <h1>{props.title}</h1>
                            <h6>{props.heading6}</h6>
                            <div className="links">
                                <Link to={props.to1} className='link1 hover-button'>
                                    <FormattedMessage id='get-started-button' defaultMessage='Get Started' />
                                </Link>
                                <Link to={props.to2} className='link2'>
                                    <FormattedMessage id='learn-more-button' defaultMessage='Learn More' />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Watermarking

