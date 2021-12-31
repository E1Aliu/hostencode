import React from 'react'
import './megamenu.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { FeaturesData1, FeaturesData2 } from '../data'

const FeaturesMenu = () => {
    return (
        <div className='nav-megamenu features-megamenu'>

            <div className="left">
                <h5>
                    <FormattedMessage id="navbar-main-link1" defaultMessage='Features'/>
                </h5>
                <div className="main-links">
                    {FeaturesData1.map((props) => {
                        return(
                            <Link to={props.to} className='megamenu-link'>
                                <div className="icon-container">
                                    {props.icon}
                                </div>
                                <div className="block">
                                    <h6>{props.title}</h6>
                                    <p>{props.text}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="right">
                <div>
                    <h4>
                        <FormattedMessage id="more-to-offer" defaultMessage='More to offer'/>
                    </h4>
                    <div className="links2">
                        {FeaturesData2.map((props) => {
                            return(
                                <Link to={props.to}>
                                    {props.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <Link to='/' className='hover-button'>
                    <FormattedMessage id='view-all-button' defaultMessage='View All' />
                </Link>
            </div>
        </div>
    )
}

export default FeaturesMenu
