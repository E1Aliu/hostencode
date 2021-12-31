import React from 'react'
import { FormattedMessage } from 'react-intl'
import './styles/transcoding.scss'
import { Link } from 'react-router-dom'
import { FaCloud } from 'react-icons/fa'

const Transcoding = () => {
    return (
        <div className='transcoding-component'>
            <div className="info">
                <h5>
                    <FormattedMessage id='home-transcoding-text' defaultMessage='WHY HOSTENCODE' />
                </h5>
                <h1>
                    <FormattedMessage id='home-transcoding-title' defaultMessage='The Simplest Cloud Video
                        Transcoding Service & API.' />
                </h1>
                <p>
                    <FormattedMessage id='home-transcoding-description' defaultMessage='Our mission: 
                    building a platform that developers love. We want to make things easier and more 
                    productive for them offering beautiful code, API and documentation.' />
                </p>
                <Link to='/' className='hover-button'>
                    <FormattedMessage id='get-started-button' defaultMessage='Get Started' />
                </Link>
            </div>


            <div className="images">
                <div className="img"></div>
                <div className="cloud cloud1">
                    <FaCloud />
                </div>
                <div className="cloud cloud2">
                    <FaCloud />
                </div>
            </div>
        </div>
    )
}

export default Transcoding
