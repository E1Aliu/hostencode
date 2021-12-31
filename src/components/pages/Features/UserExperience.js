import React from "react";
import {Link} from'react-router-dom';
import'./styles/userexperience.scss';


import {CgScreenWide} from 'react-icons/cg'
import{MdFormatListNumbered,MdScreenSearchDesktop,MdOutlineScreenShare} from 'react-icons/md';
import {GiThink} from 'react-icons/gi';
import {HiOutlineClock} from 'react-icons/hi'

const UserExperience=()=>{
    return(
        <div className="user">
            <div className="VideoPlayer">
                <div className="img">

                </div>
                <div className="Info">
                    <h1>Enhance your video player for the best user ecperience.</h1>
                    <h5>Visual seek with tooltip thumbnails by generating sprite and VTT files</h5>
                    <h2>Generate static thumbnails.</h2>
                    <p><MdFormatListNumbered/>  By the number</p>
                    <p><GiThink/> Offsets in second</p>
                    <p><HiOutlineClock/>  Stay in control</p>
                    <div className="links">
                        <Link to='/'>Get Started</Link>
                        <Link to='/'>Lern More</Link>
                    </div>

                </div>
            </div>
            <div className="GIF">
                <div className="description">
                    <h1>Generate the coolest GIF got your videos.</h1>
                    <h5>Optimized for the best quality/size</h5>
                    <div className="row">
                        <div className='bg'><CgScreenWide/></div><p>Up to 500px wide</p>
                    </div>
                    <div className="row">
                        <div className='bg'><MdScreenSearchDesktop/></div><p>Up to 10 different screens</p>
                    </div>
                    <div className="row">
                        <div className='bg'><MdOutlineScreenShare/></div><p>Up to 5 seconds per scene</p>
                    </div>
                    <div className="links">
                    <Link to='/'>Get Started</Link>
                    <Link to='/'>Learn More</Link>
                    </div>

                </div>
                <div className="img">

                </div>

            </div>
            
        </div>
    )
}
export default UserExperience;