import React from 'react'
import './megamenu.scss'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { AboutData1, AboutData2 } from '../data'

const AboutMenu = () => {
    return (
        <div className='nav-megamenu about-megamenu'>

            <div className="left">
                <h5>
                    <FormattedMessage id="navbar-main-link4" defaultMessage='About Us'/> 
                </h5>
                <div className="main-links">
                    {AboutData1.map((props) => {
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
                        <FormattedMessage id="company" defaultMessage='Company'/>
                    </h4>
                    <div className="links2">
                        {AboutData2.map((props) => {
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

export default AboutMenu
