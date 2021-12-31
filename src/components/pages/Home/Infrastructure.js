import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'
import { Data6 } from './data'
import './styles/Infrastructure.scss'
import { Link } from 'react-router-dom'

const Infrastructure = () => {
    return (
        <div className='video-infrastructure'>
            <h5>
                <FormattedMessage id='home-infrastructure-subtitle' defaultMessage='OUR PRODUCTS' />
            </h5>
            <h1>
                <FormattedMessage id='home-infrastructure-title' defaultMessage='Products to power 
                    modern OTT video infrastructure' />
            </h1>
            <p className='p'>
                <FormattedMessage id='home-infrastructure-text' defaultMessage='Use HostEncode products 
                    as individual components or leverage multiple products for maximum benefit.' />
            </p>

            <div className="items1">
                {Data6.map((props) => {
                    return(
                        <div className="item1">
                            <div className="icon" style={{content: `url(${props.icon})`}}></div>
                            <h2>{props.title}</h2>
                            {props.text ? <p>{props.text}</p> : null}
                            {props.mainTo ? 
                                <Link to={props.mainTo} className='main-link'>
                                    <FormattedMessage id='home-infrastructure-link3' defaultMessage='Try It For Free' />
                                    <BsArrowRight />
                                </Link>
                                : null
                            }
                            {props.links ? 
                                <div className="links">
                                    {props.links.map((l) => {
                                        return(
                                            <Link to={l.to}>
                                                {l.link} <BsArrowRight />
                                            </Link>
                                        )
                                    })}
                                </div>   

                                : null
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Infrastructure
