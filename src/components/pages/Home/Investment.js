import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Data2 } from './data'
import './styles/investment.scss'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:500, itemsToShow: 1 }
];

const Investment = () => {
    return (
        <div className='investment-component'>
            <h5>
                <FormattedMessage id='home-investment-text' defaultMessage='DOWN THE BITRATES GO' />
            </h5>
            <h1>
                <FormattedMessage id='home-investment-title' defaultMessage='Highest quality with the lowest bitrates ensures a clear return on your investment.' />
            </h1>

            <div className="image">
                {/* <div className="img"></div> */}
                <Carousel className="slider" 
                breakPoints={breakPoints} >
                    <div className="slider-img-container">
                        <div className="img img1"></div>
                        <div className="line-container">
                            <div className="inner-line">
                                <div className="line"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="slider-img-container">
                        <div className="img img2"></div>
                        <div className="line-container">
                            <div className="inner-line">
                                <div className="line"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                
                <div className="items">
                    {Data2.map((props) => {
                        return(
                            <div className={`item ${props.item}`}>
                                <div className="rectangles">
                                    <div className={`rectangle ${props.color1}`}></div>
                                    <div className={`rectangle ${props.color1}`}></div>
                                    <div className={`rectangle ${props.color2}`}></div>
                                </div>
                                <div className="text">
                                    <div className="storage">{props.storage}</div>
                                    <h6>{props.text}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

            <p>
                <FormattedMessage id='home-investment-description' defaultMessage='The example above shows the power of our encoder, reducing bitrates by 30% with no visible loss in quality. Our encoding solutions provide a clear return on investment over the entire lifespan of a video asset. Multi-Codec Streaming” and “Per-Title- Encoding” are the magic words that will massively cut your CDN and storage costs by delivering best-in-class picture quality at the lowest bitrate.' />
            </p>
            <Link to='/' className='hover-button'>
                <FormattedMessage id='home-investment-link' defaultMessage='Encode Your First Video Now' />
            </Link>
        </div>
    )
}

export default Investment
