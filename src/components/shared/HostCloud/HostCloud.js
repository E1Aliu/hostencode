import React from 'react'
import './HostCloud.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Data1 } from './data'

const HostCloud = () => {
    return (
        <div className='shared-host-cloud'>

            <div className="left">
                <div className="img"></div>
                <h2>
                    <FormattedMessage id='host-cloud-title2' defaultMessage='Time to Encode a 15 min file' />
                </h2>
                {Data1.map((props) => {
                    return(
                        <div className={`lines ${props.cls}`}>
                            <h4 className='text'>{props.title}</h4>
                            <div className="line">
                                <div className="inner-line"></div>
                            </div>
                            <h4 className='h4'>{props.time}</h4>
                        </div>
                    )
                })}
            </div>


            <div className="info">
                <h5>
                    <FormattedMessage id='host-cloud-subtitle' defaultMessage='HOST CLOUD SYNERGY' />
                </h5>
                <h1>
                    <FormattedMessage id='host-cloud-title' defaultMessage='Sacrifice nothing in the cloud' />
                </h1>
                <h6>
                    <FormattedMessage id='host-cloud-heading6' defaultMessage="HostEncode's cloud transcoder service brings every feature of the HostEncode platform into the cloud" />
                </h6>
                <p>
                    <FormattedMessage id='host-cloud-text' defaultMessage="Provided on a multi-tenant 
                    SaaS or single-tenant customer-managed VPC cloud environment. Retain your Host 
                    workflow engine, and you're in complete control of when jobs run with your perpetual 
                    licenses and when they will use the cloud service" />
                </p>
                <div className="inline">
                    <div className="icon icon1"></div>
                    <span><FormattedMessage id='host-cloud-span1' defaultMessage='Scale based on your needs' /></span>
                </div>
                <div className="inline">
                    <div className="icon icon2"></div>
                    <span><FormattedMessage id='host-cloud-span2' defaultMessage='Stay in control' /></span>
                </div>
                <div className="links">
                    <Link to='/' className='link1 hover-button'>
                        <FormattedMessage id='get-started-button' defaultMessage='Get Started' />
                    </Link>
                    <Link to='/' className='link2'>
                        <FormattedMessage id='learn-more-button' defaultMessage='Learn More' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HostCloud
