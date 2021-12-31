import React from 'react'
import './styles/hls.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Data4 } from './data'

const HLS = () => {
    return (
        <div className='simplest-cloud-video'>
            
            <div className="info">
                <h5>
                    <FormattedMessage id='home-video-text' defaultMessage="We're simple and efficient" />
                </h5>
                <h1>
                    <FormattedMessage id='home-video-title' defaultMessage='HLS & MPEG-Dash, generated
                    all in once.' />
                </h1>
                <p>
                    <FormattedMessage id='home-video-description' defaultMessage='Compatible with every device and browsres
                    Media files are split into .ts segments. Widely compatible.' />
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

export default HLS
