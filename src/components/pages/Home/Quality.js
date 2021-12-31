import React from 'react'
import { Data5 } from './data'
import './styles/Quality.scss'
import { FaCloud } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const Quality = () => {
    return (
        <div className='high-quality-conversions'>
            {Data5.map((props) => {
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
                            <p>{props.text}</p>
                            <div className="inline">
                                <div className="icon" style={{content: `url(${props.icon1})`}}></div>
                                <span>{props.item1}</span>
                            </div>
                            <div className="inline">
                                <div className="icon" style={{content: `url(${props.icon2})`}}></div>
                                <span>{props.item2}</span>
                            </div>
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

export default Quality
