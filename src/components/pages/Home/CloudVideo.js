import React from 'react'
import './styles/CloudVideo.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Data4 } from './data'

const CloudVideo = () => {
    return (
        <div className='simplest-cloud-video'>
            
            <div className="info">
                <h5>
                    <FormattedMessage id='home-video-text' defaultMessage="We're simple and efficient" />
                </h5>
                <h1>
                    <FormattedMessage id='home-video-title' defaultMessage='The Simplest Cloud Video 
                        Transcoding Service & API.' />
                </h1>
                <p>
                    <FormattedMessage id='home-video-description' defaultMessage='Our mission: building 
                    a platform that developers love. We want to make things easier and more productive 
                    for them offering beautiful code, API and documentation.' />
                </p>
                <Link to='/'>
                    <FormattedMessage id='learn-more-button' defaultMessage='Learn More' />
                </Link>
            </div>

            <div className="items1">
                {Data4.map((props) => {
                    return(
                        <div className={`item1 ${props.cls}`}>
                            {props.items.map((l) => {
                                return(
                                    <div className="inner-item">
                                        <div className="icon-container">
                                            <div className="icon" style={{content: `url(${l.icon})`}}></div>
                                            <h6>{l.title}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CloudVideo
