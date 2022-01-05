import React from "react";
import {Link} from'react-router-dom';
import'./styles/screns.scss';


import {CgScreenWide} from 'react-icons/cg'
import{MdFormatListNumbered,MdScreenSearchDesktop,MdOutlineScreenShare} from 'react-icons/md';
import {GiThink} from 'react-icons/gi';
import {HiOutlineClock} from 'react-icons/hi'
import { FaCloud } from 'react-icons/fa'
import { FormattedMessage } from "react-intl";

const Screns=()=>{
    return(
        <div className="GIF">
                <div className="description">
                    <h1><FormattedMessage id='gif-titel' defaultMessage='Generate the coolest GIF got your videos.'/></h1>
                    <h5><FormattedMessage id='dif-desc' defaultMessage='Optimized for the best quality/size'/></h5>
                    <div className="row">
                        <div className='bg'><CgScreenWide/></div><p><FormattedMessage id='Wide' defaultMessage='Up to 500px wide'/></p>
                    </div>
                    <div className="row">
                        <div className='bg'><MdScreenSearchDesktop/></div><p><FormattedMessage id='diferent' defaultMessage='Up to 10 different screens'/></p>
                    </div>
                    <div className="row">
                        <div className='bg'><MdOutlineScreenShare/></div><p><FormattedMessage id='timer' defaultMessage='Up to 5 seconds per scene'/></p>
                    </div>
                    <div className="links">
                        <Link to='/'><FormattedMessage id='links-start' defaultMessage='Get Started'/></Link>
                        <Link to='/'><FormattedMessage id='links-more' defaultMessage='Learn More'/></Link>
                    </div>

                </div>
                <div className="gif-img">
                <div>
                <h3>Tweak your animated GIF.</h3>
                <p>Add blur effect. change aspect ration to fit your content</p>
                </div>
                <div className="cloud cloud1">
                    <FaCloud />
                </div>
                <div className="cloud cloud2">
                    <FaCloud />
                </div>
                <div className="img"></div>
                </div>

            </div> 
    )
}
export default Screns