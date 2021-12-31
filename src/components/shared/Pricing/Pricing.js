import React from 'react'
import './Pricing.scss'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Data1 } from './data'

const Pricing = () => {
    return (
        <div className='shared-pricing-scales'>
            <h5>
                <FormattedMessage id='pricing-subtitle' defaultMessage='FLEXIBLE PRICING' />
            </h5>
            <h1>
                <FormattedMessage id='pricing-title' defaultMessage='Our pricing scales simply with you' />
            </h1>
            <p className='p'>
                <FormattedMessage id='pricing-text' defaultMessage="HostEncode pricing relates directly to your usage which varies per product." />
            </p>

            <div className="cards">
                {Data1.map((props) => {
                    return(
                        <div className="card">
                            <h2>{props.title}</h2>
                            <h3>{props.price}</h3>
                            <div className="month">
                                <FormattedMessage id='per-month' defaultMessage='Per month' />
                            </div>
                            <Link to={props.to}>
                                <FormattedMessage id='start-trial' defaultMessage='Start Trial' />
                            </Link>
                            <p>{props.description}</p>
                            <div className="line"></div>
                            <h4>{props.text}</h4>
                            {props.items.map((l) => {
                                return(
                                    <div className="item">
                                        <div className="icon" style={{content:`url(${l.icon})`}}></div>
                                        <span>{l.item}</span>
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

export default Pricing
