import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './styles/banner.scss'

const Banner = () => {
    return (
        <div className='banner'>

            <div className="inner-banner">
                <div className="bg"></div>
                <h1>
                    <FormattedMessage id='features-banner-title' defaultMessage='The simplest Video Transcoding API' />
                </h1>
                <p>
                    <FormattedMessage id='features-banner-text' defaultMessage='All is automated, from transcoding into different renditions, packing and uploading everything
                    back to your CDN.' />
                </p>
                <div className="links">
                    <Link to='/' className='link1 hover-button'>
                        <FormattedMessage id='get-started-button' defaultMessage='Get Started' />
                    </Link>
                    <Link to='/' className='link2'>
                        <FormattedMessage id='learn-more-button' defaultMessage='Learn More' />
                    </Link>
                </div>
            </div>

            <div className="img"></div>
        </div>
    )
}

export default Banner
