import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from 'react-dom';
import './styles/banner.scss';

const Banner = ()=>{
    return(
        <div className="banner">
            <div className='innerbanner'>
                <div className='bg'></div>
                <h1>
                    <FormattedMessage id="Feature-banner-titel" defaultMessage='The simplest Video Tramscoding API'/>
                </h1>
                <p>
                    <FormattedMessage id="Fearures-banner-text" defaultMessage="All is automaed from transcoding into ddifferent renditions,
                    packaging and uploading everything back to your CDN"/>
                </p>
                 {/* <div className='links'>
                    <Link to='/' className='link1 hover-button'>
                        <FormattedMessage id='get-started-button' defaultMessage="Get Started" />
        
                    </Link>
                    <Link to='/' className='link2'>
                      <FormattedMessage id='learn-more-button' defaultMessage="Learn More" />
                    </Link>
                </div>  */}

            </div>
            <div className="img"></div>

        </div>
    )
}
export default Banner